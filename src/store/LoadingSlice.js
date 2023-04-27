import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
  },
  reducers: {
    openLoading: (state, actions) => {
      state.loading = true;
    },
    closeLoading: (state, actions) => {
      state.loading = false;
    },
  },
});

export const { openLoading, closeLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
