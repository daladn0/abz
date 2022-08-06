import axios from "axios";

const apiUrl =
  process.env.VUE_APP_API_URL ||
  "https://frontend-test-assignment-api.abz.agency/api/v1";

const axiosParams = {
  baseURL: apiUrl,
};

const axiosInstance = axios.create(axiosParams);

axiosInstance.interceptors.request.use((config) => {
  config.headers.Token = `${localStorage.getItem("token")}`;
  return config;
});

axiosInstance.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get(`${apiUrl}/token`);
        if (response.data.success) {
          localStorage.setItem("token", response.data.token);
          return axiosInstance.request(originalRequest);
        }
      } catch (e) {
        console.log(`Unauthorized`);
      }
    }
    throw error;
  }
);

const api = (axios) => {
  return {
    get: (url, config) => axios.get(url, config),
    post: (url, body, config) => axios.post(url, body, config),
    patch: (url, body, config) => axios.patch(url, body, config),
    delete: (url, config) => axios.delete(url, config),
  };
};

export default api(axiosInstance);
