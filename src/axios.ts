import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api/v1", // change if different
  withCredentials: true,
});

export default API;