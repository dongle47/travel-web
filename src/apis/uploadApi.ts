import { axiosClient } from "./axiosClient";

const uploadApi = {
//   postUploadAvatar: async (param: any) => {
//     const res = await axiosClient.post("upload-service/file/upload", param, {
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//     return res.data;
//   },

  uploadAvatar(params:any){
    const url = 'upload-service/file/upload'
    return axiosClient.post(url,  params, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    })
  }
};

export default uploadApi;