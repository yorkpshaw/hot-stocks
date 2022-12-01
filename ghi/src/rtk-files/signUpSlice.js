import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    signUp: false,
}

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        toggleSignUp: (state) => {
            state.signUp = !state.signUp;
        }
    },
});

export const {
    toggleSignUp,
} = signUpSlice.actions;
