import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  smallMenuIsOpen: false,
  mainMenuIsOpen: false,
  isDarkTheme: true,
  showMobileMenu: false,
  showNotification: false,
  notificationText: "",
  notificationStatus: "",
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
    openNotification: (state, action) => {
      state.notificationText = action.payload.text;
      state.notificationStatus = action.payload.status;
      state.showNotification = true;
    },
    closeNotification: state => {
      state.showNotification = false;
    },
  },
});

export const { toggleTheme, toggleMainMenu, toggleMobileMenu, toggleSmallMenu, openNotification, closeNotification } =
  UISlice.actions;

export default UISlice.reducer;
