import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = JSON.parse(localStorage.getItem("userInfo"));

const validToken = userFromStorage?.token && new Date(userFromStorage?.tokenExpirDate).getTime() > Date.now();

const initialState = {
  user: validToken ? userFromStorage : null,
  tokenExpireDate: validToken ? userFromStorage.tokenExpirDate : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    removeUser: state => {
      state.user = null;
    },
    setTokenExpires: (state, action) => {
      state.tokenExpireDate = action.payload;
    },
    removeTokenExpires: state => {
      state.tokenExpireDate = null;
    },
    subscribe: (state, action) => {
      state.user.subscribedUsers.push(action.payload);
    },
    unsubscribe: (state, action) => {
      const indexToDelete = state.user.subscribedUsers.findIndex(id => id === action.payload);
      indexToDelete >= 0 && state.user.subscribedUsers.splice(indexToDelete, 1);
    },
  },
});

export const loginUser = userData => {
  return async dispatch => {
    dispatch(setUser(userData));
    // generate current time + 1hour in milliseconds.
    // toISOString because we can't store Date object in localStorage and redux store.
    const tokenExpirDate = new Date(Date.now() + 3600000).toISOString();

    dispatch(setTokenExpires(tokenExpirDate));

    localStorage.setItem("userInfo", JSON.stringify({ tokenExpirDate, ...userData }));
  };
};

export const logoutUser = () => {
  return async dispatch => {
    dispatch(removeUser());
    dispatch(removeTokenExpires());
    localStorage.removeItem("userInfo");
  };
};

export const { setUser, removeUser, setTokenExpires, removeTokenExpires, subscribe, unsubscribe } = authSlice.actions;

export default authSlice.reducer;
