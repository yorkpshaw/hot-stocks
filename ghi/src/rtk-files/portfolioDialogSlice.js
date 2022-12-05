import { createSlice } from '@reduxjs/toolkit';
import { useLazyGetStockQuery } from './stocksApi';
import { useDispatch } from 'react-redux';

const initialState = {
    portfolioDialog: false,
    card: {},
    cost: {},
}

// const [triggerStock, {data: stockData, error: stockError, isLoading: stockLoading}] = useLazyGetStockQuery();
// const dispatch = useDispatch();

export const portfolioDialogSlice = createSlice({
    name: 'portfolioDialog',
    initialState,
    reducers: {
        togglePortfolioDialog: (state, card) => {
            state.portfolioDialog = !state.portfolioDialog;
            if (card) {
                state.card = card.payload;
                // dispatch(triggerStock(card.symbol));
            } else {
                state.card = initialState.card;
            }
        },
        updateCostCurrent: (state, cost) => {
            state.cost = cost;
        }
    },
});

export const {
    togglePortfolioDialog,
    updateCostCurrent,
} = portfolioDialogSlice.actions;
