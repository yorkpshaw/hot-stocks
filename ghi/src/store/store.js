import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { portfolioStocksApi } from './portfolioStocksApi';
import { savedItemsApi } from './savedItemsApi';
import { accountsApi } from './accountsApi';

export const store = configureStore({
  reducer: {
    [portfolioStocksApi.reducerPath]: portfolioStocksApi.reducer,
    [savedItemsApi.reducerPath]: savedItemsApi.reducer,
    [accountsApi.reducerPath]: accountsApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
        .concat(portfolioStocksApi.middleware)
        .concat(savedItemsApi.middleware)
        .concat(accountsApi.middleware),
});

setupListeners(store.dispatch);
