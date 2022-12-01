import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    portfolioDialog: false,
}

export const portfolioDialogSlice = createSlice({
    name: 'portfolioDialog',
    initialState,
    reducers: {
        togglePortfolioDialog: (state) => {
            state.portfolioDialog = !state.portfolioDialog;
        }
    },
});

export const {
    togglePortfolioDialog,
} = portfolioDialogSlice.actions;
