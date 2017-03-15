import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Upcoming from '@/components/upcoming'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Hello
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming
    }
  ]
})
