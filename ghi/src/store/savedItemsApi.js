import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const savedItemsApi = createApi({
    reducerPath: 'savedItems',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    endpoints: builder => ({
        getsavedItems: builder.query({
            query: () => '/api/saved_items/',
        }),
    }),
});

export const { useGetSavedItemsQuery } = savedItemsApi;
