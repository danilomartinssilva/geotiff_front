import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.100.85:3010",
});

export default api;
