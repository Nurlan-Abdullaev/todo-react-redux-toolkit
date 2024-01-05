import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../store/todoSlice/todoSlice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
