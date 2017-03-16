import Vue from 'vue'
import Router from 'vue-router'
import moving from '@/components/moving'
import Upcoming from '@/components/upcoming'
import Top250 from '@/components/top250'
import Search from '@/components/searchList'

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
    },
    {
      path: '/top250',
      name: 'Top250',
      component: Top250
    },
    {
      path: '/search',
      component: Search
    }
  ]
})
