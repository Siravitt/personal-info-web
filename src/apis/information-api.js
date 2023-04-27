import axios from "../configs/axios";

export const getData = () => axios.get("/user/information");

export const addData = (input) => axios.post("/user/information", input);
