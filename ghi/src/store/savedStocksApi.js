import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const savedStocksApi = createApi({
    reducerPath: 'savedStocks',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
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
    useCreateSavedStocksMutation,
    // useEditSavedStocksMutation,
    useDeleteSavedStocksMutation,
} = savedStocksApi;
