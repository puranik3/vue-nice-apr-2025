import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import WorkshopsListPage from '@/views/WorkshopsListPage.vue'
import WorkshopDetailsPage from '@/views/WorkshopDetailsPage.vue'
import SessionsList from '@/components/workshops/SessionsList.vue'
import AddSession from '@/components/workshops/AddSession.vue'
import LoginPage from '@/views/LoginPage.vue'
import { useAuthStore } from '@/stores/auth'

const meta = {
  authorize: ['admin', 'general'],
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage,
    },
    {
      name: 'login',
      path: '/login',
      component: LoginPage,
    },
    {
      name: 'workshops-list',
      path: '/workshops',
      component: WorkshopsListPage,
      meta,
    },
    {
      name: 'workshop-details',
      path: '/workshops/:id',
      component: WorkshopDetailsPage,
      meta,
      props: true,
      children: [
        {
          name: 'sessions-list',
          path: '',
          component: SessionsList,
          meta,
        },
        {
          name: 'add-session',
          path: 'add',
          component: AddSession,
          meta,
        },
      ],
    },
  ],
})

router.beforeEach((to, from, next) => {
  const { isAuthenticated } = useAuthStore()

  console.log('we are navigating')
  console.log('from = ', from)
  console.log('to = ', to)

  if (to.meta.authorize) {
    if (isAuthenticated()) {
      next()
    } else {
      return next({
        path: '/login',
      })
    }
  }

  next()
})

export default router

const arr = [1, 2, 3]
const john = {
  name: 'John',
}
// export default arr;

// named exports - can be multiple
export { arr, john }
