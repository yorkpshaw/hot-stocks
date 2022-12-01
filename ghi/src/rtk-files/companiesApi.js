import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const companiesApi = createApi({
    reducerPath: 'companies',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_SERVICE,
    }),
    endpoints: builder => ({
        getCompany: builder.query({
            query: (symbol) => `/api/companies/${symbol}/`,
        }),
    }),
});

export const { useGetCompanyQuery } = companiesApi;
