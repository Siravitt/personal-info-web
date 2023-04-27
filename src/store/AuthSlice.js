import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";
import * as localStorage from "../utils/local-storage";
import * as authApi from "../apis/auth-api";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    registerModal: false,
    auth: localStorage.getAccessToken()
      ? jwtDecode(localStorage.getAccessToken())
      : null,
  },
  reducers: {
    setModal: (state, actions) => {
      state.registerModal = !state.registerModal;
    },
    login: (state, actions) => {
      state.auth = actions.payload;
    },
    logout: (state, actions) => {
      localStorage.removeAccessToken()
      state.auth = null;
    },
  },
});

export const thunkLogin = (data) => async (dispatch) => {
  try {
    const res = await authApi.login(data);
    localStorage.setAccessToken(res.data.accessToken);
    dispatch(login(jwtDecode(res.data.accessToken)));
  } catch (err) {
    console.log(err);
  }
};

export const { setModal, login, logout } = authSlice.actions;

export default authSlice.reducer;
