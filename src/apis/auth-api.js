import axios from "../configs/axios";

export const register = (input) => axios.post("/user/register", input);
export const login = (input) => axios.post("/user/login", input);
