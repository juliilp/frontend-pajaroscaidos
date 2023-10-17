import axios from "axios";

const api = axios.create({
  // baseURL: 'https://pajaros-caidos-backend.onrender.com', // BACK RENDER
  baseURL: "https://pajaros-caidos-back-end2-0-git-main-maxmdr2022.vercel.app", // BACK VERCEL
  withCredentials: true,
});

export default api;
