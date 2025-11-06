import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001" // chạy json-server ở cổng này
});

export default api;
