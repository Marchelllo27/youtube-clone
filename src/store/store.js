import { configureStore } from "@reduxjs/toolkit";
import UISliceReducer from "./ui-slice";

const store = configureStore({
  reducer: { ui: UISliceReducer },
});

export default store;
