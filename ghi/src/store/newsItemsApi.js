import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsItemsApi = createApi({
    reducerPath: 'newsItems',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    endpoints: builder => ({
        getNewsItems: builder.query({
            query: () => '/api/news_items/',
        }),
    }),
});

export const { useGetNewsItemsQuery } = newsItemsApi;
