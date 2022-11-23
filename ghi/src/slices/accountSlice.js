import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    username: '',
    email: '',
    password: '',
}

export const accountSlice = createSlice({
    name: 'account',
    initialState,
    reducers: {
        updateField: (state, action) => {
            state[action.payload.field] = action.payload.value;
        },
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
