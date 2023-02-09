import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload;
    },

    logoutSuccess: (state) => {
      state.user = null;
    },
  },
});

//actions
export const authActions = authSlice.actions;

//selector
export const selectUser = (state: RootState) => state.auth.user;

//reducer
const authReducer = authSlice.reducer;
export default authReducer;
