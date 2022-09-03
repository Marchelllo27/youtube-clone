import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  video: {},
};

const UISlice = createSlice({
  name: "video",
  initialState: initialState,
  reducers: {
    like: {},
    dislike: {},
  },
});

export const { like, dislike } = UISlice.actions;

export default UISlice.reducer;
