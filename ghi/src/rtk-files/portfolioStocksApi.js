import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authApi } from './authApi';

export const portfolioStocksApi = createApi({
    reducerPath: 'portfolioStocks',
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
    tagTypes: ['PortfolioStock'],
    endpoints: builder => ({
        getPortfolioStocks: builder.query({
            query: () => '/api/portfolio_stocks',
            // providesTags: ['PortfolioStock']
        }),
        createOrUpdatePortfolioStock: builder.mutation({
            query: data => ({
                url: '/api/portfolio_stocks/',
                body: data,
                method: 'post',
            }),
            invalidateTags: ['PortfolioStock'],
        }),
        // updatePortfolioStock: builder.mutation({
        //     query: data => ({
        //         url: '/api/portfolio_stocks/{portfolio_stock_id}/',
        //         body: data,
        //         method: 'put',
        //     }),
        //     invalidateTags: ['PortfolioStock'],
        // }),
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
    useCreateOrUpdatePortfolioStockMutation,
    // useUpdatePortfolioStockMutation,
    useDeletePortfolioStockMutation,
} = portfolioStocksApi;




//mutations
