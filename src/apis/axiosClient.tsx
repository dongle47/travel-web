import axios from "axios";
import queryString from "query-string";
const baseURL = "https://travel-api.huytx.com/stag/";

export const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});

// const refreshToken = async (user: any) => {
//   const res = await axiosClient.post(
//     "/auth/refreshtoken",
//     { refreshToken: user.refreshToken },
//     { headers: { Authorization: `Bearer ${user.accessToken}` } }
//   );
//   return res.data;
// };
