import { configureStore } from "@reduxjs/toolkit";

import { postsReducer } from "./posts";
import { userReducer } from "./user";

const store = configureStore({
  reducer: {
    posts: postsReducer,
    auth: userReducer
  },
});

export default store;