import axios from "axios";

export const quotesApi = {
  getQuote: () => {
    return axios.get("https://animechan.xyz/api/random");
  },
};
