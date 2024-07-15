import { createSlice } from '@reduxjs/toolkit';
import { IUser } from '@types/User';

export interface AuthState {
  loggedUser: IUser | null;
}

const initialState: AuthState = {
  loggedUser: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {

  }
})