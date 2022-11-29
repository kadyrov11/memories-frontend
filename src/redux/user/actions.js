import { createAsyncThunk, createAction } from '@reduxjs/toolkit'

import * as api from '../../api'

export const register = createAsyncThunk("auth", async (newUser) => {
    const { data } = await api.register(newUser);
    return data;
});

export const login = createAsyncThunk("auth", async (user) => {
    const { data } = await api.login(user);
    return data;
});

export const googleAuth = createAsyncThunk("auth", async (user) => {
    const { data } = await api.googleAuth(user);
    return data;
});

export const getMe = createAsyncThunk("getMe", async () => {
    const { data } = await api.getMe();
    return data;
});

export const setAuthErr = createAction("authErr");

export const logout = createAction("logout");
