import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    signup: (state, { payload }) => {},
    login: (state, { payload }) => {},
    logout: (state, { payload }) => {},
  },
});

export const { signup, login, logout } = authSlice.actions;

export default authSlice.reducer;
