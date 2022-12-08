import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authApi } from './authApi';

export const newsItemsApi = createApi({
  reducerPath: 'newsItems',
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
  endpoints: builder => ({
    getNewsItems: builder.query({
      query: () => '/api/news_items/',
    }),
  }),
});

export const { useGetNewsItemsQuery } = newsItemsApi;
