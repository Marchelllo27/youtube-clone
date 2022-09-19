import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = localStorage.getItem("userInfo");

const initialState = {
  user: userFromStorage || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: state => {
      state.user = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;

export default authSlice.reducer;
