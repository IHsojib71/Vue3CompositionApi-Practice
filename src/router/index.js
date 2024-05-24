import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '@/views/AboutView.vue'
import EventDetails from '@/views/event/Details.vue'
import EventRegister from '@/views/event/Register.vue'
import EventEdit from '@/views/event/Edit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
      props: route=>({page:parseInt(route.query.page) || 1})
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props:true, 
      component: EventDetails
    },
    {
      path: '/event/:id/register',
      name: 'event-register',
      props:true, 
      component: EventRegister
    },
    {
      path: '/event/:id/edit',
      name: 'event-edit',
      props:true, 
      component: EventEdit
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: AboutView
    }
  ]
})

export default router
