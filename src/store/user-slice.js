import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
  isLoading: false,
  errorMsg: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLogin: state => {
      state.isLoading = true;
      state.errorMsg = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.errorMsg = action.payload;
    },
    logout: state => ({ ...initialState, currentUser: null }),
    subscription: (state, action) => {
      const userIsSubscribed = state.currentUser.subscribedUsers.findIndex(userId => userId === action.payload);

      // IF USER SUBSCRIBED ALREADY
      if (userIsSubscribed >= 0) {
        state.currentUser.subscribedUsers.splice(userIsSubscribed, 1);
      } else {
        // IF USER ISN'T SUBSCRIBED YET
        state.currentUser.subscribedUsers.push(action.payload);
      }
    },
  },
});

// export const loginUser = data => async dispatch => {
//   dispatch(startLogin());

//   try {
//     const res = await axios.post(data.url, data.userInfo);
//     dispatch(loginSuccess(res.data));
//     localStorage.setItem("user", JSON.stringify(res.data));
//     data.setUser({ name: "", email: "", password: "" });
//     data.navigate("/");
//   } catch (error) {
//     return dispatch(loginFailure(error.response.data.message));
//   }
// };

export const { loginFailure, loginSuccess, logout, startLogin, subscription } = userSlice.actions;

export default userSlice.reducer;
