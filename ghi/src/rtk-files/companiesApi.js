import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { authApi } from './authApi';

export const companiesApi = createApi({
  reducerPath: 'companies',
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
    getCompany: builder.query({
      query: (symbol) => `/api/companies/${symbol}/`,
    }),
  }),
});

export const { useGetCompanyQuery, useLazyGetCompanyQuery } = companiesApi;
