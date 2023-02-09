import { LoginParams, RegisterParams } from "../models/common";
import { axiosClient } from "./axiosClient";

const authApi = {
  postRegister: async (params: RegisterParams) => {
    const res = await axiosClient.post("/user-service/user/register", params);
    return res.data;
  },
  postLogin: async (params: LoginParams) => {
    const res = await axiosClient.post("/user-service/user/login", params);
    return res.data;
  },
};

export default authApi;
