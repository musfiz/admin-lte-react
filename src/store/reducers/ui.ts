import { createSlice } from "@reduxjs/toolkit";


export interface uiState {
  sidebarCollapsed: boolean
}

const initialState: uiState = {
  sidebarCollapsed: false
}

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
    }
  }
});

export const {
  toggleSidebar
} = uiSlice.actions

export default uiSlice.reducer;