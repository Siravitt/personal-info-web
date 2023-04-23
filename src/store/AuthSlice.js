import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    registerModal: false,
    authData: null,
  },
  reducers: {
    setModal: (state, actions) => {
      state.registerModal = !state.registerModal;
    },
  },
});

export const { setModal } = authSlice.actions;

export default authSlice.reducer;
