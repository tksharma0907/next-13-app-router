import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import counterReducer from "@redux/slice/counterSlice";
import userReducer from "@redux/slice/user";

export const store = configureStore({
  reducer: {
    counterReducer,
    userReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);
