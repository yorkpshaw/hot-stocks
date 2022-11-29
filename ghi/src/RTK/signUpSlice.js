import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    signUp: false,
}

export const signUpSlice = createSlice({
    name: 'signUp',
    initialState,
    reducers: {
        setSignUp: (state) => {
            state.signUp = !state.signUp;
        }
    },
});

export const {
    setSignUp,
} = signUpSlice.actions;
