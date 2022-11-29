import { createSlice } from '@reduxjs/toolkit';

import { reducers, extraReducers } from './reducers'

const initialState = {
    posts: [],
    pageCount: 1,
    loading: false,
    error: null
};

const postsSlice = createSlice({
    name: "Memories",
    initialState,
    reducers,
    extraReducers
});

export const postsReducer = postsSlice.reducer;