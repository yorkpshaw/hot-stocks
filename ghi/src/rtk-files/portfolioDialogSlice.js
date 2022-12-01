import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    show: null,
}

export const portfolioDialogSlice = createSlice({
    name: 'portfolioModal',
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.show = action.payload;
        },
        clearForm: () => {
            return initialState;
        }
    },
});

export const {
    clearForm,
    updateField,
    showModal,
} = accountSlice.actions;

export const LOG_IN_MODAL = 'LOG_IN_MODAL';
export const SIGN_UP_MODAL = 'SIGN_UP_MODAL';
