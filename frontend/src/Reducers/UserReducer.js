import { createReducer } from '@reduxjs/toolkit'

const initialState = {}

export const userReducer = createReducer(initialState, {
    loginRequest: (state) => {
        state.loading = true
    },
    loginSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
    },
    loginFaliure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;

    },

    registerRequest: (state) => {
        state.loading = true
    },
    registerSuccess: (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;

    },
    registerFaliure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;

    },


    loadingRequest: (state) => {
        state.loading = true
    },
    loadingSuccess: (state, action) => {
        state.loading = true;
        state.user = action.payload;
        state.isAuthenticated = true;

    },
    loadingFaliure: (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isAuthenticated = false;

    },

})