import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const savedNewsItemsApi = createApi({
    reducerPath: 'savedNewsItems',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    endpoints: builder => ({
        getSavedNewsItems: builder.query({
            query: () => '/api/saved_news_items/',
        }),
    }),
});

export const { useGetSavedNewsItemsQuery } = savedNewsItemsApi;
