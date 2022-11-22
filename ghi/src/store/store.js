import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { portfolioStocksApi } from './portfolioStocksApi';
import { savedItemsApi } from './savedItemsApi';
import { accountsApi } from './accountsApi';
import { newsItemsApi } from './newsItemsApi';
import { stocksApi } from './stocksApi';

export const store = configureStore({
  reducer: {
    [accountsApi.reducerPath]: accountsApi.reducer,
    [newsItemsApi.reducerPath]: newsItemsApi.reducer,
    [portfolioStocksApi.reducerPath]: portfolioStocksApi.reducer,
    [savedItemsApi.reducerPath]: savedItemsApi.reducer,
    [stocksApi.reducerPath]: stocksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
        .concat(accountsApi.middleware)
        .concat(newsItemsApi.middleware)
        .concat(portfolioStocksApi.middleware)
        .concat(savedItemsApi.middleware)
        .concat(stocksApi.middleware),
});

setupListeners(store.dispatch);
