import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '../../types/User';

export interface AuthState {
  loggedUser: {
    token: string | null,
    user: IUser | null;
  }
}

const initialState: AuthState = {
  loggedUser: {
    token: null,
    user: null
  },
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state: AuthState, data: any) => {
      state.loggedUser.token = data.payload.token;
      state.loggedUser.user = data.payload.user;
    },
    emptyCurrentUser: (state: AuthState) => {
      state.loggedUser.token = null;
      state.loggedUser.user = null;
    }
  }
});

export const { setCurrentUser, emptyCurrentUser } = authSlice.actions;

export default authSlice.reducer;