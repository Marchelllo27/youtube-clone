import { createSlice } from "@reduxjs/toolkit";

const darkThemeFromStorage = localStorage.getItem("darkTheme");

const initialState = {
  smallMenuIsOpen: false,
  mainMenuIsOpen: false,
  isDarkTheme: darkThemeFromStorage !== "false",
  showMobileMenu: false,
  showNotification: false,
  notificationText: "",
  notificationStatus: "",
};

const UISlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // toggleSmallMenu: state => {
    //   state.smallMenuIsOpen = !state.smallMenuIsOpen;
    // },
    openSmallMenu: state => {
      state.smallMenuIsOpen = true;
    },
    closeSmallMenu: state => {
      state.smallMenuIsOpen = false;
    },

    // toggleMainMenu: state => {
    //   state.mainMenuIsOpen = !state.mainMenuIsOpen;
    // },
    openMainMenu: state => {
      state.mainMenuIsOpen = true;
    },
    closeMainMenu: state => {
      state.mainMenuIsOpen = false;
    },
    // toggleMobileMenu: state => {
    //   state.showMobileMenu = !state.showMobileMenu;
    // },
    openMobileMenu: state => {
      state.showMobileMenu = true;
    },
    closeMobileMenu: state => {
      state.showMobileMenu = false;
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

export const {
  toggleTheme,
  toggleMainMenu,
  toggleMobileMenu,
  toggleSmallMenu,
  openNotification,
  closeNotification,
  openSmallMenu,
  closeSmallMenu,
  openMainMenu,
  closeMainMenu,
  openMobileMenu,
  closeMobileMenu,
} = UISlice.actions;

export default UISlice.reducer;
