import axios from 'axios'

const api = axios.create({
  baseURL: 'https://pajaros-caidos-back-end2-0-livid.vercel.app',
  withCredentials: true,
})

export default api
