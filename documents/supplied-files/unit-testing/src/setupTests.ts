import { config } from '@vue/test-utils'
import vuetify from '@/plugins/vuetify'
import { beforeAll, afterEach, afterAll, vi } from 'vitest'

import './services/configureAxios'
import server from './mocks/server'

// sets up DOM related matchers
import '@testing-library/jest-dom'

export const useRouter = vi.fn().mockReturnValue({
  push: vi.fn(),
  replace: vi.fn(),
  go: vi.fn(),
  back: vi.fn(),
  forward: vi.fn()
})

export const useRoute = vi.fn().mockReturnValue({
  path: '/',
  name: 'home',
  params: {
    id: '6'
  },
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  redirectedFrom: undefined,
  meta: {}
})

// in our test, when our components uses useRouter() / useRoute() this mock shall be used
vi.mock('vue-router', () => ({
  useRouter,
  useRoute
}))

// runs once before the first test
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

config.global.plugins = [vuetify]
