import {
    getPosts,
    createPost,
    updatePost,
    likePost,
    deletePost,
    setPostsLoading,
    setPostsErr

} from './actions';

export const reducers = {};

export const extraReducers = {
    // Get All
    [getPosts.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [getPosts.fulfilled]: (state, { payload }) => {
        state.posts = payload.posts;
        state.pageCount = payload.pageCount;
        state.loading = false;
        state.error = null;
    },
    [getPosts.rejected]: (state) => {
        state.loading = false;
        state.error = "Failed to get posts!";
    },
    // Create
    [createPost.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [createPost.fulfilled]: (state) => {
        state.loading = false;
        state.error = null;
    },
    [createPost.rejected]: (state) => {
        state.loading = false;
        state.error = "Failed to create post!";
    },
    // Update
    [updatePost.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [updatePost.fulfilled]: (state, { payload }) => {
        state.posts = state.posts.map(post => (
            post._id === payload._id ? payload : post
        ));
        state.loading = false;
        state.error = null;
    },
    [updatePost.rejected]: (state) => {
        state.loading = false;
        state.error = 'Failed to update post!';
    },
    // Like
    [likePost.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [likePost.fulfilled]: (state, { payload }) => {
        console.log(`payload: ${payload}`);
        state.posts = state.posts.map(post => post._id === payload._id ? payload : post);
        state.loading = false;
        state.error = null;
    },
    [likePost.rejected]: (state) => {
        state.loading = false;
        state.error = "Failed to like post!";
    },
    // Delete
    [deletePost.pending]: (state) => {
        state.loading = true;
        state.error = null;
    },
    [deletePost.fulfilled]: (state, { payload }) => {
        state.posts = state.posts.filter(post => post._id !== payload);
        state.loading = false;
        state.error = null;
    },
    [deletePost.rejected]: (state) => {
        state.loading = false;
        state.error = "Failed to delete post!";
    },
    // Set Error
    [setPostsErr]: (state, { payload }) => { 
        state.error = payload;
    },
    [setPostsLoading]: (state, { payload }) => { 
        state.loading = payload;
    },
};