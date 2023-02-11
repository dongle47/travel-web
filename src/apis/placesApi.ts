import { Response } from "../models/common";
import { Place } from "../models/place";
import { axiosClient } from "./axiosClient";

const apiPlaces = {
  getPlaces(): Promise<Response<Place[]>> {
    const url = "/place-service/place/list";
    return axiosClient.get(url);
  },

  getPlace(id: string): Promise<Response<Place>> {
    const url = `/place-service/place/detail/${id}`;
    return axiosClient.get(url);
  },
};

export default apiPlaces;
