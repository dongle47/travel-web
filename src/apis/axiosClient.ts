import { selectAccessToken, selectRefreshToken } from './../modules/Authentication/authSlice';
import { useAppSelector } from './../hooks/index';
import { useSelector } from 'react-redux';
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import queryString from "query-string";
import authApi from './authApi';
const baseURL = "https://travel-api.huytx.com/stag/";

export const axiosClient = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
  paramsSerializer: (params) => queryString.stringify(params),
});

// Add a request interceptor
axiosClient.interceptors.request.use(
  function (config: any) {
    // Do something before request is sent
   const localWeb = localStorage.getItem('persist:trave-web')

   if(localWeb){
      const persistStorage = JSON.parse(localWeb)
      const authStorage = JSON.parse(persistStorage.auth)

      if(authStorage.isLoggedIn){
        const token = authStorage.currentUser.token
        // console.log(token)
        config.headers.Authorization = `Bearer ${token.access_token}`
      }
   }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data;
  },

  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    const originalConfig = error.config

    if (error.response) {
      const errorMessage = error.response.data.error_info.message[0]

      if(errorMessage === 'Token is expired'){
        const localWeb = localStorage.getItem('persist:trave-web')

        if(localWeb){
          const persistStorage = JSON.parse(localWeb)
          const authStorage = JSON.parse(persistStorage.auth)
          const token = authStorage.currentUser.token
          const refreshToken = token.refresh_token

          // authApi.getRefreshToken(refreshToken).then(res => {

          // }).catch(err=> console.log(err))
          

        }
        return axios(originalConfig)
      }


    // if(error.response.status === 400 && !originalConfig._retry){
    //     originalConfig._retry = true

    //     // try {
    //     //   const localWeb = localStorage.getItem('persist:trave-web')
    //     //   if(localWeb){
    //     //     const persistStorage = JSON.parse(localWeb)
    //     //     const authStorage = JSON.parse(persistStorage.auth)
    //     //     const token = authStorage.currentUser.token
    //     //     const refreshToken = token.refresh_token

    //     //     console.log(refreshToken)
    //     //     error.config.headers.Authorization = `Bearer ${refreshToken}`

    //     //     authApi.getRefreshToken().then(res => {
    //     //       console.log('success',res)
    //     //     }).catch(err => {
    //     //       console.log('error', err)
    //     //     })          

    //     //   }

    //     // } catch (error) {
    //     //   console.log('error', error)
    //     // }
    // }
      
    return Promise.reject(error);
  }
  }
);

export const axiosClientRefreshToken = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
  },
})
