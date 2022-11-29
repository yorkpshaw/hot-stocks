import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { portfolioStocksApi } from './portfolioStocksApi';
import { savedItemsApi } from './savedItemsApi';
import { newsItemsApi} from './newsItemsApi';
import { companiesApi} from './companiesApi';
import { stocksApi } from './stocksApi';
import { savedNewsItemsApi } from './savedNewsItemsApi';
import { savedStocksApi } from './savedStocksApi';
import { authApi } from './authApi';
import { accountSlice } from './accountSlice';
import { signUpSlice } from './signUpSlice';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [accountSlice.name]: accountSlice.reducer,
    [signUpSlice.name]: signUpSlice.reducer,
    [companiesApi.reducerPath]: companiesApi.reducer,
    [portfolioStocksApi.reducerPath]: portfolioStocksApi.reducer,
    [savedItemsApi.reducerPath]: savedItemsApi.reducer,
    [savedNewsItemsApi.reducerPath]: savedItemsApi.reducer,
    [savedStocksApi.reducerPath]: savedItemsApi.reducer,
    [stocksApi.reducerPath]: stocksApi.reducer,
    [newsItemsApi.reducerPath]: newsItemsApi.reducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(companiesApi.middleware)
        .concat(portfolioStocksApi.middleware)
        .concat(savedItemsApi.middleware)
        .concat(savedNewsItemsApi.middleware)
        .concat(savedStocksApi.middleware)
        .concat(stocksApi.middleware)
        .concat(newsItemsApi.middleware),
});

setupListeners(store.dispatch);
