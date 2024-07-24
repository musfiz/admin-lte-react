import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from "./reducers/ui";
import { authSlice } from "./reducers/auth";

const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    auth: authSlice.reducer
  }
});

export default store;