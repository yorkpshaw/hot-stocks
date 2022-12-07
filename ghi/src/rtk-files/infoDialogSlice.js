import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    infoDialog: false,
    card: {},
}


export const infoDialogSlice = createSlice({
    name: 'infoDialog',
    initialState,
    reducers: {
        toggleInfoDialog: (state, card) => {
            state.infoDialog = !state.infoDialog;
            if (card) {
                state.card = card.payload;
            } else {
                state.card = initialState.card;
            }
        },
    },
});

export const {
    toggleInfoDialog,
} = infoDialogSlice.actions;
