import axios from 'axios'

export const baseURL =
  process.env.NEXT_PUBLIC_API_LOCAL || 'http://localhost:3000/api'

export const apiAxios = axios.create()
