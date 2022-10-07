import axios from 'axios'

export const baseURL = process.env.NEXT_PUBLIC_BACKEND_API_URL

export const defaultHeader = (token) => ({ headers: { Authorization: `Bearer ${token}` } })

// Create an instance of axios
const api = axios.create({ baseURL, headers: { 'Content-Type': 'application/json' } })

export const setClientAuthToken = (token) => {
  if (token) api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  else delete api.defaults.headers.common['Authorization']
}

export const serverApi = (token) =>
  axios.create({
    baseURL: process.env.BACKEND_API_URL,
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
  })

export default api