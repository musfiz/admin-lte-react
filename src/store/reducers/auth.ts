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

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCurrentUser: (state: AuthState, data: any) => {
      state.loggedUser = data.payload;
    }
  }
});

export const { setCurrentUser } = authSlice.actions;

export default authSlice.reducer;