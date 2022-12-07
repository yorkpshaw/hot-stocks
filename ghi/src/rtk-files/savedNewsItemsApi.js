import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authApi } from './authApi';

export const savedNewsItemsApi = createApi({
    reducerPath: 'savedNewsItems',
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
    tagTypes: ['SavedNewsItems'],
    endpoints: builder => ({
        getSavedNewsItems: builder.query({
            query: () => '/api/saved_news_items',
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
        deleteSavedNewsItem: builder.mutation({
            query: data => ({
                url: `/api/saved_news_items/${data.id}/`,
                method: 'delete',
            }),
            invalidatesTags: ['SavedNewsItems'],
        }),
    }),
});

export const {
    useGetSavedNewsItemsQuery,
    useCreateOrUpdateSavedNewsItemMutation,
    useDeleteSavedNewsItemMutation,
} = savedNewsItemsApi;
