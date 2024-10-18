import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  likes_count: 0,
  repost_count: 0,
};

const interactions = createSlice({
  name: "interactions",
  initialState,
});

export default interactions.reducer;
