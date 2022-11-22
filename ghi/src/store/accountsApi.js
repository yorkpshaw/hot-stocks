import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const accountsApi = createApi({
    reducerPath: 'accounts',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    tagTypes: ['AccountList'],
    endpoints: builder => ({
        getAccounts: builder.query({
            query: () => '/api/accounts/',
            providesTags: ['AccountList'],
        }),
        createAccount: builder.mutation({
            query: data => ({
                url: '/api/accounts/',
                body: data,
                method: 'post',
            }),
            invlidatesTags: ['AccountList'],
        })
    }),
});

export const {
    useGetAccountsQuery,
    useCreateAccountMutation,
 } = accountsApi;
