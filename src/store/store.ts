import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducers/ui";
import authReducer from "./reducers/auth";

const store = configureStore({
  reducer: {
    ui: uiReducer,
    auth: authReducer
  }
});

export default store;