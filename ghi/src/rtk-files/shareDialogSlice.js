import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  shareDialog: false,
  card: {},
};


export const shareDialogSlice = createSlice({
  name: 'shareDialog',
  initialState,
  reducers: {
    toggleShareDialog: (state, card) => {
      state.shareDialog = !state.shareDialog;
      if (card) {
        state.card = card.payload;
      } else {
        state.card = initialState.card;
      }
    },
  },
});

export const {
  toggleShareDialog,
} = shareDialogSlice.actions;
