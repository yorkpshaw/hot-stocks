import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const savedNewsItemsApi = createApi({
    reducerPath: 'savedNewsItems',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    tagTypes: ['SavedNewsItems'],
    endpoints: builder => ({
        getSavedNewsItems: builder.query({
            query: () => '/api/saved_news_items/',
            providesTags: ['SavedNewsItems'],
        }),
        createOrUpdateSavedNewsItem: builder.mutation({
            query: data => ({
                url: '/api/saved_news_items/',
                body: data,
                method: 'post',
            }),
            invalidatesTags: ['SavedNewsItems'],
        }),
        // editSavedNewsItem: builder.mutation({
        //     query: data => ({
        //         url: `/api/saved_news_items/${data.id}/`,
        //         body: data,
        //         method: 'put',
        //     }),
        // }),
        deleteSavedNewsItem: builder.mutation({
            query: data => ({
                url: `/api/saved_news_items/${data.id}/`,
                body: data,
                method: 'delete',
            }),
            invalidatesTags: ['SavedNewsItems'],
        }),
    }),
});

export const {
    useGetSavedNewsItemsQuery,
    useCreateSavedNewsItemsMutation,
    // useEditSavedNewsItemsMutation,
    useDeleteSavedNewsItemsMutation,
 } = savedNewsItemsApi;
