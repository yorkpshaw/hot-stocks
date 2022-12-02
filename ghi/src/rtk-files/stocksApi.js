import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authApi } from './authApi';

export const stocksApi = createApi({
    reducerPath: 'stocks',
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
    endpoints: builder => ({
        getStock: builder.query({
            query: (symbol) => `/api/stocks/${symbol}/`,
        }),
        getStocks: builder.query({
          query: (value) => ({
            url: '/api/stocks',
            params: value,
          }),
        }),
    }),
});

export const {
  useGetStockQuery,
  useLazyGetStockQuery,
  useGetStocksQuery,
  useLazyGetStocksQuery
 } = stocksApi;
