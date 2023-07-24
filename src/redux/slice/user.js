import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogin: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
});

export const { setLogin } = user.actions;
export default user.reducer;
