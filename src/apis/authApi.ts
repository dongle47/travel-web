import {
  LoginParams,
  RegisterParams,
  ResponseLogin,
  ResponseRegister,
} from "../models/common";
import { User } from "../models/user";
import { axiosClient } from "./axiosClient";

const authApi = {
  postRegister(params: RegisterParams): Promise<ResponseRegister> {
    const url = "/user-service/user/register";
    return axiosClient.post(url, params);
  },

  postLogin(params: LoginParams): Promise<ResponseLogin> {
    const url = "/user-service/user/login";
    return axiosClient.post(url, params);
  },
};

export default authApi;
