import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const stocksApi = createApi({
    reducerPath: 'stocks',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    endpoints: builder => ({
        getStock: builder.query({
            query: () => '/api/stocks/',
        }),
    }),
});

export const { useGetStockQuery } = savedStocksApi;
