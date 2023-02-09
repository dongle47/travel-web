import { axiosClient } from "./axiosClient";

const apiAuth = {
  postRegister: async (params: any) => {
    const res = await axiosClient.post("/user-service/user/register", params);
    return res.data;
  },
  postLogin: async (params: any) => {
    const res = await axiosClient.post("/user-service/user/login", params);
    return res.data;
  },
};

export default apiAuth;
