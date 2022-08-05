import api from "@/api/api";

export const get = (url, config) => {
  return api.get(url, config);
};

export const post = (url, data, config) => {
  return api.post(url, data, config);
};
