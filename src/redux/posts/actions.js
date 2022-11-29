import { createAction, createAsyncThunk } from '@reduxjs/toolkit'

import * as api from '../../api'

export const getPosts = createAsyncThunk("getPosts", async ({page, search}) => {
    const { data } = await api.fetchPosts(page, search);
    return data;
});

export const createPost = createAsyncThunk("createPost", async (post) => {
    const { data } = await api.createPost(post);
    return data;
});

export const updatePost = createAsyncThunk("updatePost", async (post) => {
    const { data } = await api.updatePost(post._id, post);
    return data;
});

export const likePost = createAsyncThunk("likePost", async (id) => {
    const { data } = await api.likePost(id);
    return data;
});

export const deletePost = createAsyncThunk("deletePost", async (id) => {
    await api.deletePost(id);
    return id;
});

export const setPostsErr = createAction("postsErr");

export const setPostsLoading = createAction("postsLoading");

