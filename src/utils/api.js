import axios from "axios";
import { BASE_URL } from "./constants";

const api = axios.create({
  baseURL: BASE_URL.replace(/\/$/, ""), // strip trailing slash if present
  withCredentials: true
});

export default api;