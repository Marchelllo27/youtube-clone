import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoData: {},
};

const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    setVideo: (state, action) => {
      state.videoData = action.payload;
    },
    removeVideo: state => {
      state.videoData = {};
    },
    setLike: (state, action) => {
      state.videoData.likes.push(action.payload);
      const hasDislike = state.videoData.dislikes.findIndex(el => el === action.payload);
      hasDislike >= 0 && state.videoData.dislikes.splice(hasDislike, 1);
    },
    setDislike: (state, action) => {
      state.videoData.dislikes.push(action.payload);
      const hasLike = state.videoData.likes.findIndex(el => el === action.payload);
      hasLike >= 0 && state.videoData.likes.splice(hasLike, 1);
    },
  },
});

export const { setLike, setDislike, setVideo, removeVideo } = videoSlice.actions;

export default videoSlice.reducer;
