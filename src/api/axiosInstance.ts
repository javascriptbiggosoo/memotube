import axios from "axios";
import { getItem } from "../utils/localStorage";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080",
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더에 토큰 추가
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
