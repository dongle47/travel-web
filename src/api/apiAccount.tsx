import { axiosClient } from "./axiosClient";

const apiAccount = {
  postRegister: async (params: any) => {
    const res = await axiosClient.post("/user-service/user/register", params);
    return res.data;
  },
};

export default apiAccount;
