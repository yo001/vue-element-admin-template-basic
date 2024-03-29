import { createRouter, createWebHistory } from 'vue-router'
import { h, resolveComponent } from 'vue'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/dashboard',
      component: DefaultLayout,
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: () => import('../views/Main/Dashboard.vue'),
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/Main/About.vue'),
        },
      ],
    },
    {
      path: '/pages',
      name: 'pages',
      redirect: '/pages/404',
      component: {
        render: () => h(resolveComponent('router-view')),
      },
      children: [
        {
          path: '/pages/404',
          name: '404',
          component: () => import('../views/Pages/404.vue'),
        },
        {
          path: '/pages/500',
          name: '500',
          component: () => import('../views/Pages/500.vue'),
        },
      ],
    },
  ],
})

export default router
