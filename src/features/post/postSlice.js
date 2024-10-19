import { createSlice } from "@reduxjs/toolkit";
import postsData from "../../postsData";

const initialState = {
  postsItems: postsData,
  title: "",
  image: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    increaseLikesCount: (state, { payload }) => {
      const post = state.postsItems.find(
        (postItem) => postItem.id === payload.id
      );
      post.like_count += 1;
    },
    increaseRepostCount: (state, { payload }) => {
      const post = state.postsItems.find(
        (postItem) => postItem.id === payload.id
      );

      post.repost_count += 1;
    },
    setGlobalImage: (state, { payload }) => {
      let newImg = payload.img;
      state.image = newImg;
    },
    setGlobalTitle: (state, { payload }) => {
      let newTitle = payload.title;
      state.title = newTitle;
    },
    createPost: (state) => {
      const newPost = {
        id: Date.now(),
        title: state.title,
        image: state.image,
      };
      state.postsItems.unshift(newPost);
    },
  },
});

export const {
  increaseLikesCount,
  increaseRepostCount,
  setGlobalImage,
  setGlobalTitle,
  createPost,
} = postSlice.actions;

export default postSlice.reducer;
