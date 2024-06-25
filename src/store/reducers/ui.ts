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
    },
    sidebarOpen: (state) => {
      state.sidebarCollapsed = false;
    },
    sidebarCollapse: (state) => {
      state.sidebarCollapsed = true;
    }
  }
});

export const {
  toggleSidebar,
  sidebarOpen,
  sidebarCollapse
} = uiSlice.actions

export default uiSlice.reducer;