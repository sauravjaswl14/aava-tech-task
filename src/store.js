import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/post/postSlice";
import modalReducer from "./features/modal/modalSlice";

export const store = configureStore({
  reducer: {
    post: postReducer,
    modal: modalReducer,
  },
});
