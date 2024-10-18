import { configureStore } from "@reduxjs/toolkit";
import interactionReducer from "./features/userInteractions/userInteractionsSlice";

export const store = configureStore({
  reducer: {
    userInteraction: interactionReducer,
  },
});
