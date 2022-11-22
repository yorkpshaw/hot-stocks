import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authentication',
    tagTypes: ['Token'],
    baseQuery: fetchBaseQuery({
      baseUrl: process.env.API_SERVICE,
    }),
    endpoints: builder => ({
      login: builder.mutation({
        query: (info) => {
          let formData = null;
          if (info instanceof HTMLElement) {
            formData = new FormData(info);
          } else {
            formData = new FormData();
            formData.append('username', info.username);
            formData.append('email', info.email);
            formData.append('password', info.password);
          }
          return {
            url: '/token',
            method: 'post',
            body: formData,
            credentials: 'include',
          };
        },
        invalidatesTags: (result) => {
          return (result && ['Account']) || [];
        },
      }),
      getToken: builder.query({
        query: () => ({
          url: '/token',
          credentials: 'include',
        }),
        providesTags: ['Token'],
      }),
    }),
  });
