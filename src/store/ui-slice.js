import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  smallMenuIsOpen: false,
  mainMenuIsOpen: false,
  isDarkTheme: true,
};

const UISlice = createSlice({
  name: "ui",
  initialState: initialState,
  reducers: {
    openSmallMenu: state => {
      state.smallMenuIsOpen = true;
    },
    closeSmallMenu: state => {
      state.smallMenuIsOpen = false;
    },
    openMainMenu: state => {
      state.mainMenuIsOpen = true;
    },
    closeMainMenu: state => {
      state.mainMenuIsOpen = false;
    },
    toggleTheme: state => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { openSmallMenu, closeSmallMenu, openMainMenu, closeMainMenu, toggleTheme } = UISlice.actions;

export default UISlice.reducer;
