import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./ui-slice";
import authSliceReducer from "./auth-slice";
import videoSliceReducer from "./video-slice";
import mainApi from "../api/mainAPI";

const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    auth: authSliceReducer,
    video: videoSliceReducer,
    [mainApi.reducerPath]: mainApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(mainApi.middleware),
});

export default store;
