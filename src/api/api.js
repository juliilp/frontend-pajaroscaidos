import axios from "axios";

const api = axios.create({
  // baseURL: "https://pajaros-caidos-backend.onrender.com", // BACK RENDER
  // baseURL: "https://pajaros-caidos-back-end2-0.vercel.app/", // BACK VERCEL maxi
  baseURL: "https://pajaros-caidos-back-end2-0-livid.vercel.app", //BACK VERCEL NICO
  // baseURL: "http://localhost:3001", // BACK local
  withCredentials: true,
});

export default api;
