import { ListResponse } from "../models/common";
import { axiosClient } from "./axiosClient";

const apiPlaces = {
  getPlaces(): Promise<ListResponse<[]>> {
    const url = "/place-service/place/list";
    return axiosClient.get(url);
  },

  getPlace(id: string) {
    const url = `/place-service/place/detail/${id}`;
    return axiosClient.get(url);
  },
};

export default apiPlaces;
