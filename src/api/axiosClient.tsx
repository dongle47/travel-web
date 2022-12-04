import axios from "axios";
import queryString from "query-string";
import jwt_decode from "jwt-decode";
// const baseURL='https://playerhostedapitest.herokuapp.com/api/'
//const baseURL='http://localhost:5000/api'
const baseURL = "https://travel-api.huytx.com/stag/";
export const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});

// const refreshToken = async (user) => {
//   const res = await axiosClient.post(
//     "/auth/refreshtoken",
//     { refreshToken: user.refreshToken },
//     { headers: { Authorization: `Bearer ${user.accessToken}` } }
//   );
//   return res.data;
// };

// export const axiosClientWithToken = axios.create({
//   baseURL: baseURL,
//   headers: {
//     "Content-Type": "application/json",
//   },
//   withCredentials: true,
//   paramsSerializer: (params) => queryString.stringify(params),
// });
