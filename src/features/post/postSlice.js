import { createSlice } from "@reduxjs/toolkit";
import postsData from "../../postsData";

const initialState = {
  postsItems: postsData,
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
  },
});

export const { increaseLikesCount, increaseRepostCount } = postSlice.actions;
export default postSlice.reducer;
