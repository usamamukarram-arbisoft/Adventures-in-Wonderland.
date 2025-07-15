import { configureStore } from "@reduxjs/toolkit";

import SigninReducer from "./Components/SiginComponent/SiginSlice";

export const store = configureStore({
  reducer: {
    Auth: SigninReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
