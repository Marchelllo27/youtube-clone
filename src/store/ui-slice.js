import { createSlice } from "@reduxjs/toolkit";

const darkThemeFromStorage = localStorage.getItem("darkTheme");

const initialState = {
  smallMenuIsOpen: false,
  mainMenuIsOpen: false,
  showMobileMenu: false,
  hamburgerIconClicked: false,
  isDarkTheme: darkThemeFromStorage !== "false",
  showNotification: false,
  notificationText: "",
  notificationStatus: "",
};

const UISlice = createSlice({
  name: "ui",
  initialState,
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

    openMobileMenu: state => {
      state.showMobileMenu = true;
    },
    closeMobileMenu: state => {
      state.showMobileMenu = false;
    },

    setToTrueClickedHamburgerIcon: state => {
      state.hamburgerIconClicked = true;
    },

    setToFalseClickedHamburgerIcon: state => {
      state.hamburgerIconClicked = false;
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
  setToTrueClickedHamburgerIcon,
  setToFalseClickedHamburgerIcon,
} = UISlice.actions;

export default UISlice.reducer;
