import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./reducers/TodoSlice.js";

export const store = configureStore({
  reducer: todosReducer,
});
