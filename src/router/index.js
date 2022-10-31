import { createRouter, createWebHistory } from 'vue-router'
import TodoApp from '../components/TodoApp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'TodoApp',
      component: TodoApp
    },
    {
    // path: '/about',
    //  name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded w//en the route is visited.
      //component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
