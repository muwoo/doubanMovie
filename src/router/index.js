import Vue from 'vue'
import Router from 'vue-router'
import Moving from '@/components/moving'
import Upcoming from '@/components/upcoming'
import Top250 from '@/components/top250'
import MoviesDetail from '@/components/common/moviesDetail'

import Search from '@/components/searchList'

Vue.use(Router)
/**
 * 路由信息配置
 */
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Moving',
      component: Moving
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
      name: 'Search',
      component: Search
    },
    {
      path: '/moviesDetail',
      name: 'moviesDetail',
      component: MoviesDetail
    }

  ]
})
