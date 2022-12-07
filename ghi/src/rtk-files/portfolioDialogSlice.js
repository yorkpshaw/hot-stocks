import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    portfolioDialog: false,
    card: {},
}


export const portfolioDialogSlice = createSlice({
    name: 'portfolioDialog',
    initialState,
    reducers: {
        togglePortfolioDialog: (state, card) => {
            state.portfolioDialog = !state.portfolioDialog;
            if (card) {
                state.card = card.payload;
            } else {
                state.card = initialState.card;
            }
        },
    },
});

export const {
    togglePortfolioDialog,
    updateCostCurrent,
} = portfolioDialogSlice.actions;
