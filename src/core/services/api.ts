import axios from 'axios'

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_LOCAL || 'http://localhost:3000/api'
})

export const baseURL =
  process.env.NEXT_PUBLIC_API_LOCAL || 'http://localhost:3000/api'

export const apiAxios = axios

export default api
