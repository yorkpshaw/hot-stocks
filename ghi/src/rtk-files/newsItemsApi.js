import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authApi } from './authApi';

export const newsItemsApi = createApi({
    reducerPath: 'newsItems',
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
        getNewsItems: builder.query({
            query: () => '/api/news_items/',
        }),
    }),
});

export const { useGetNewsItemsQuery } = newsItemsApi;
