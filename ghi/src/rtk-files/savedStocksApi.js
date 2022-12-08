import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authApi } from './authApi';


export const savedStocksApi = createApi({
    reducerPath: 'savedStocks',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_API_HOST,
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
            query: () => '/api/saved_stocks',
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
        deleteSavedStock: builder.mutation({
            query: data => ({
                url: `/api/saved_news_items/${data.id}/`,
                method: 'delete',
            }),
            invalidatesTags: ['SavedNewsItems'],
        }),
    }),
});

export const {
    useGetSavedStocksQuery,
    useCreateOrUpdateSavedStockMutation,
    useDeleteSavedStockMutation,
} = savedStocksApi;
