import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import { useCreatePortfolioStockMutation } from './accountsApi';

export const portfolioStocksApi = createApi({
    reducerPath: 'portfolioStocks',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    tagTypes: ['PortfolioStock'],
    endpoints: builder => ({
        getPortfolioStocks: builder.query({
            query: () => '/api/portfolio_stocks/',
            providesTags: ['PortfolioStock']
        }),
        createPortfolioStock: builder.mutation({
            query: data => ({
                url: '/api/portfolio_stocks/',
                body: data,
                method: 'post',
            }),
            invalidateTags: ['PortfolioStock'],
        }),
        updatePortfolioStock: builder.mutation({
            query: data => ({
                url: '/api/portfolio_stocks/{portfolio_stock_id}/',
                body: data,
                method: 'put',
            }),
            invalidateTags: ['PortfolioStock'],
        }),
        deletePortfolioStock: builder.mutation({
            query: data => ({
                url: "/api/portfolio_stocks/{portfolio_stock_id}",
                body: data,
                method: 'delete',
            }),
            invalidateTags: ['PortfolioStock']
        })
    }),
});


export const {
    useGetPortfolioStocksQuery,
    useCreatePortfolioStockMutation,
    useUpdatePortfolioStockMutation,
    useDeletePortfolioStockMutation,
} = portfolioStocksApi;




//mutations