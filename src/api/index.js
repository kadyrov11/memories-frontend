import axios from './axios';

// AUTH
export const register = (newUser) => axios.post('/auth/register', newUser);
export const login = (user) => axios.post('/auth/login', user);
export const googleAuth = (user) => axios.post('/auth/google', user);
export const getMe = () => axios.get('/auth/getMe');



// POSTS
export const fetchPosts = (page, search) => axios.get(`/posts?page=${page}&search=${search}`);

export const getPost = (id) => axios.get(`/posts/${id}`);

export const createPost = (newPost) => axios.post('/posts', newPost);

export const updatePost = (id, post) => axios.patch(`/posts/${id}`, post);

export const commentPost = (id, comment) => axios.patch(`/posts/${id}/comment`, {comment});

export const deletePost = (id) => axios.delete(`/posts/${id}`);

export const likePost = (id) => axios.patch(`/posts/${id}/like`);
