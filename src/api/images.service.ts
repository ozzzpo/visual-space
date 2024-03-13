import axios, { AxiosResponse } from "axios";
const API_URL = "http://localhost:3001";
export const imagesApi = {
  getImages: (): Promise<AxiosResponse<any>> => {
    return axios.get(`${API_URL}/images`);
  },
};
