import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const savedStocksApi = createApi({
    reducerPath: 'savedStocks',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:8000/', //process.env.API_SERVICE,
        prepareHeaders: (headers, { getState }) => {
          const selector = authApi.endpoints.getToken.select();
          const { data: tokenData } = selector(getState());
          if (tokenData && tokenData.access_token) {
            headers.set('Authorization', `Bearer ${tokenData.access_token}`);
          }
          return headers;
        }
      }),
    tagTypes: ['SavedStocks'],
    endpoints: builder => ({
        getSavedStocks: builder.query({
            query: () => '/api/saved_stocks/',
            providesTags: ['SavedStocks'],
        }),
        createOrUpdateSavedStock: builder.mutation({
            query: data => ({
                url: '/api/saved_stocks/',
                body: data,
                method: 'post',
            }),
            invalidatesTags: ['SavedStocks'],
        }),
        // editSavedStock: builder.mutation({
        //     query: data => ({
        //         url: `/api/saved_stocks/${data.id}/`,
        //         body: data,
        //         method: 'put',
        //     }),
        // }),
        deleteSavedStock: builder.mutation({
            query: data => ({
                url: `/api/saved_news_items/${data.id}/`,
                body: data,
                method: 'delete',
            }),
            invalidatesTags: ['SavedNewsItems'],
        }),
    }),
});

export const {
    useGetSavedStocksQuery,
    useCreateOrUpdateSavedStockMutation,
    // useEditSavedStocksMutation,
    useDeleteSavedStockMutation,
} = savedStocksApi;
