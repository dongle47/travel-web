import axios from "axios";
import queryString from "query-string";

import { axiosClient } from "./axiosClient";

const apiPlaces = {
  getPlaces: async () => {
    const res = await axiosClient.get("/place/list");
    return res.data;
  },
};

export default apiPlaces;
