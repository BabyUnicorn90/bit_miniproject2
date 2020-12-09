import axios from "axios";

const api = axios.create({
  baseURL: "http://18.188.151.72:5000",
});

export const moviesApi = {
    nowshowing_list: () => api.get("nowshowing/list"),
    register: () => api.get("movie/register/<oid>"),
    comingsoon_list: () => api.get("comingsoon/list"),
    // movieDetail: (id) =>
    //   api.get(`movie/${id}`, {
    //     params: {
    //       append_to_response: "videos",
    //     },
    //   }),
    // search: (term) =>
    //   api.get("search/movie", {
    //     params: {
    //       query: encodeURIComponent(term),
    //     },
    //   }),
  };
  