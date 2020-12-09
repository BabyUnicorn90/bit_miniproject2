import axios from "axios";

const api = axios.create({
  baseURL: "http://18.188.151.72:5000",
});

export const moviesApi = {
  nowshowing_list: () => api.get("nowshowing/list"),
};
