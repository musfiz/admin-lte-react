import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./reducers/ui";

const store = configureStore({
  reducer: {
    ui: uiReducer
  }
});

export default store;