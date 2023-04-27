import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSlice";
import loadingReducer from "./LoadingSlice";
import dataReducer from "./DataSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    loading: loadingReducer,
    data: dataReducer,
  },
});
