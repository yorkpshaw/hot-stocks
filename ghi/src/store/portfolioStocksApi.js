import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const portfolioStocksApi = createApi({
    reducerPath: 'portfolioStocks',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    endpoints: builder => ({
        getPortfolioStocks: builder.query({
            query: () => '/api/portfolio_stocks/',
        }),
    }),
});

export const { useGetPortfolioStocksQuery } = portfolioStocksApi;
