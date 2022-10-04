import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  smallMenuIsOpen: false,
  mainMenuIsOpen: false,
  isDarkTheme: true,
  showMobileMenu: false,
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSmallMenu: state => {
      state.smallMenuIsOpen = !state.smallMenuIsOpen;
    },
    toggleMainMenu: state => {
      state.mainMenuIsOpen = !state.mainMenuIsOpen;
    },
    toggleMobileMenu: state => {
      state.showMobileMenu = !state.showMobileMenu;
    },
    toggleTheme: state => {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const { toggleTheme, toggleMainMenu, toggleMobileMenu, toggleSmallMenu } = UISlice.actions;

export default UISlice.reducer;
