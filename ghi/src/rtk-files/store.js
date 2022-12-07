import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { accountSlice } from './accountSlice';
import { authApi } from './authApi';
import { companiesApi } from './companiesApi';
import { newsItemsApi } from './newsItemsApi';
import { portfolioDialogSlice } from './portfolioDialogSlice';
import { portfolioStocksApi } from './portfolioStocksApi';
import { savedNewsItemsApi } from './savedNewsItemsApi';
import { savedStocksApi } from './savedStocksApi';
import { signUpSlice } from './signUpSlice';
import { stocksApi } from './stocksApi';


export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [accountSlice.name]: accountSlice.reducer,
    [signUpSlice.name]: signUpSlice.reducer,
    [portfolioDialogSlice.name]: portfolioDialogSlice.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    [portfolioStocksApi.reducerPath]: portfolioStocksApi.reducer,
    [savedNewsItemsApi.reducerPath]: savedNewsItemsApi.reducer,
    [savedStocksApi.reducerPath]: savedStocksApi.reducer,
    [stocksApi.reducerPath]: stocksApi.reducer,
    [newsItemsApi.reducerPath]: newsItemsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(companiesApi.middleware)
      .concat(portfolioStocksApi.middleware)
      .concat(savedNewsItemsApi.middleware)
      .concat(savedStocksApi.middleware)
      .concat(stocksApi.middleware)
      .concat(newsItemsApi.middleware),
});

setupListeners(store.dispatch);
