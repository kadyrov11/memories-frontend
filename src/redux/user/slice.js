import { createSlice } from '@reduxjs/toolkit';

import { reducers, extraReducers } from './reducers'

const initialState = {
    user: null,
    loading: false,
    error: null
};

const userSlice = createSlice({
    name: "User",
    initialState,
    reducers,
    extraReducers
});

export const userReducer = userSlice.reducer;