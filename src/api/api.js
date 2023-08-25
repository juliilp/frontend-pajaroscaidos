import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pajaros-caidos-backend.onrender.com',
  withCredentials: true,
})

export default api
