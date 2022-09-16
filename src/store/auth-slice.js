import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    toggleAuthentication: state => {
      state.isAuthenticated = !state.isAuthenticated;
    },
  },
});

export const { toggleAuthentication } = authSlice.actions;

export default authSlice.reducer;
