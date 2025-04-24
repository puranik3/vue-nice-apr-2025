import { defineStore } from 'pinia'
import { computed, reactive, toRefs } from 'vue'
import { login as loginSvc } from '@/services/auth'
import type { ILoginRequest } from '@/services/auth'

interface State {
  email: string
  authToken: string
  role: 'general' | 'admin' | 'unauthenticated'
}

const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    email: '',
    authToken: '',
    role: 'unauthenticated',
  })

  //   const isAuthenticated = computed(() => {
  //     return state.authToken !== ''
  //   })
  const isAuthenticated = () => {
    return state.authToken !== ''
  }

  const login = async (credentials: ILoginRequest) => {
    const { email, authToken, role } = await loginSvc(credentials)

    state.authToken = authToken
    state.email = email
    state.role = role
  }

  const logout = () => {
    state.email = ''
    state.authToken = ''
    state.role = 'unauthenticated'
  }

  // when we destructure a reactive object, the parts are not reactive
  const { email, authToken, role } = toRefs(state)

  return {
    email,
    authToken,
    role,
    login,
    logout,
    isAuthenticated,
  }
})

export { useAuthStore }
