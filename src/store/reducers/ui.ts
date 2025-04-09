import { createSlice } from "@reduxjs/toolkit";

export interface uiState {
  sidebar: boolean,
}

const initialState: uiState = {
  sidebar: localStorage.sidebar ? JSON.parse(localStorage.sidebar) : true
}

export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
      localStorage.sidebar = state.sidebar;
    },
    setSidebar: (state, data) => {
      state.sidebar = data.payload;
    }
  }
});

export const {
  toggleSidebar,
  setSidebar
} = uiSlice.actions

export default uiSlice.reducer;