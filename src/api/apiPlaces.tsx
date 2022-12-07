import axios from "axios";
import queryString from "query-string";

import { axiosClient } from "./axiosClient";

const apiPlaces = {
  getPlaces: async () => {
    const res = await axiosClient.get("/place-service/place/list");
    return res.data;
  },
  getPlace: async (id: string) => {
    const res = await axiosClient.get(`/place-service/place/detail/${id}`);
    return res.data;
  },
};

export default apiPlaces;
