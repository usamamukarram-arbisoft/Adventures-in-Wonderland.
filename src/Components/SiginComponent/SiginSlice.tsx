import { createSlice } from "@reduxjs/toolkit";

import type { UserState } from "../../Type/Type";

const initialState: UserState = {
  user: null,
  isLoggedIn: false,
};

const SigninSlice = createSlice({
  name: "SignIn",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const { loginUser, logout } = SigninSlice.actions;
export default SigninSlice.reducer;
