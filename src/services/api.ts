import axios from "axios";
import { storage } from "../helpers/storage";

const api = axios.create({
  baseURL: "https://navedex-api.herokuapp.com/v1",
});

if (storage.get()) {
  api.interceptors.request.use(async (config) => {
    const token = storage.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // config.headers.Host = "localhost";
      // config.headers["User-Agent"] = "computer";
      // config.headers.Accept = "*/*";
      // config.headers["Accept-Encodding"] = "gzip, deflate, br";
      // config.headers.Connection = "keep-alive";
    }
    return config;
  });
}

export default api;
