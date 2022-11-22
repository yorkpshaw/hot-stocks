import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const savedStocksApi = createApi({
    reducerPath: 'savedStocks',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    endpoints: builder => ({
        getSavedStocks: builder.query({
            query: () => '/api/saved_stocks/',
        }),
    }),
});

export const { useGetSavedStocksQuery } = savedStocksApi;
