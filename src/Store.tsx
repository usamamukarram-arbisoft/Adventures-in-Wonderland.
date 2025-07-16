import { configureStore } from "@reduxjs/toolkit";

import SearchReducer from "./Components/Search/SearchSlice";
import SigninReducer from "./Components/SiginComponent/SiginSlice";

export const store = configureStore({
  reducer: {
    Auth: SigninReducer,
    Search: SearchReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
