import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { User } from "../../models/user";

interface AuthState {
  isLoggedIn: boolean;
  currentUser?: User;
}

const initialState: AuthState = {
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.currentUser = action.payload;
      state.isLoggedIn = true;
    },

    logoutSuccess: (state) => {
      state.currentUser = undefined;
      state.isLoggedIn = false;
    },
  },
});

//actions
export const authActions = authSlice.actions;

//selector
export const selectUser = (state: RootState) => state.auth.currentUser;
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;

//reducer
const authReducer = authSlice.reducer;
export default authReducer;
