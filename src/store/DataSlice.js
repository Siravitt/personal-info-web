import { createSlice } from "@reduxjs/toolkit";
import * as informationApi from "../apis/information-api";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [],
    modal: false,
  },
  reducers: {
    setModal: (state, actions) => {
      state.modal = !state.modal;
    },
    getData: (state, actions) => {
      state.data = actions.payload;
    },
    addData: (state, actions) => {
      state.data.unshift(actions.payload);
    },
  },
});

export const thunkFetchData = () => async (dispatch) => {
  try {
    const res = await informationApi.getData();
    dispatch(getData(res.data.information));
  } catch (err) {
    console.log(err);
  }
};

export const { getData, setModal, addData } = dataSlice.actions;

export default dataSlice.reducer;
