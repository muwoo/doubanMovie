import Vue from 'vue'
import Router from 'vue-router'
import moving from '@/components/moving'
import Upcoming from '@/components/upcoming'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: moving
    },
    {
      path: '/upcoming',
      name: 'upcoming',
      component: Upcoming
    }
  ]
})
