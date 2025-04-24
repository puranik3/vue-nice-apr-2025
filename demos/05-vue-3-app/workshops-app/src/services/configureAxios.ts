import axios from 'axios'
import { useAuthStore } from '@/stores/auth'

axios.defaults.baseURL = import.meta.env.VITE_API_URL

axios.interceptors.request.use((request) => {
  const { authToken } = useAuthStore()

  request.headers['Authorization'] = `Bearer ${authToken}`

  return request
})
