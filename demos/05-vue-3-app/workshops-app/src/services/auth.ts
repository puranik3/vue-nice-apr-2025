import axios from 'axios'

export interface ILoginRequest {
  email: string
  password: string
}

interface ILoginResponse {
  email: string
  authToken: string
  role: 'admin' | 'general'
}

const login = async (credentials: ILoginRequest) => {
  const response = await axios.post<ILoginResponse>(`/login`, credentials, {
    headers: {
      'Content-Type': 'application/json',
    },
  })

  return response.data
}

export { login }
