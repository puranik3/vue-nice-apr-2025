import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import WorkshopsListPage from '@/views/WorkshopsListPage.vue'
import WorkshopDetailsPage from '@/views/WorkshopDetailsPage.vue'
import SessionsList from '@/components/workshops/SessionsList.vue'
import AddSession from '@/components/workshops/AddSession.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      name: 'home',
      path: '/',
      component: HomePage,
    },
    {
      name: 'workshops-list',
      path: '/workshops',
      component: WorkshopsListPage,
    },
    {
      name: 'workshop-details',
      path: '/workshops/:id',
      component: WorkshopDetailsPage,
      props: true,
      children: [
        {
          name: 'sessions-list',
          path: '',
          component: SessionsList,
        },
        {
          name: 'add-session',
          path: 'add',
          component: AddSession,
        },
      ],
    },
  ],
})

export default router

const arr = [1, 2, 3]
const john = {
  name: 'John',
}
// export default arr;

// named exports - can be multiple
export { arr, john }
