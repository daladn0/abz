import axios from "axios";

const axiosParams = {
  baseURL: `https://frontend-test-assignment-api.abz.agency/api/v1/`,
};

const axiosInstance = axios.create(axiosParams);

const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  };
};

export default api(axiosInstance);
