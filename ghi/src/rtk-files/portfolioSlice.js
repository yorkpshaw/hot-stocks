import { createSlice } from "@reduxjs/toolkit";

const portfolio = JSON.parse(localStorage.getItem('portfolio'));

const initialState = {
    portfolio: portfolio || [],
};

export const portfolioSlice = createSlice({
    name: 'portfolio',
    initialState,
    reducers: {
        resetData: (state) => {
            state.portfolio = [];
            localStorage.removeItem("portfolio");
        },
        addToPortfolio: (state, action) => {
            const index = state.portfolio.findIndex(
                (item) => item.symbol === action.payload.symbol
            );
            if (index === -1) {
                state.portfolio.push(action.payload);
                localStorage.setItem("portfolio", JSON.stringify(state.portfolio));
            }
        },
        removeFromPortfolio: (state, action) => {
            state.portfolio = state.portfolio.filter(
                (item) => item.symbol !== action.payload.symbol
            );
            localStorage.setItem("portfolio", JSON.stringify(state.portfolio));
        },
        updateFromPortfolio: (state, action) => {
            state.portfolio = state.portfolio.map((item) => {
                if (item.symbol === action.payload.symbol) {
                    return action.payload;
                }
                return item;
            });
            localStorage.setItem("portfolio", JSON.stringify(state.portfolio));
        },

}});

export const { resetData, addToPortfolio, removeFromPortfolio, updateFromPortfolio } = portfolioSlice.actions;

export default portfolioSlice.reducer
