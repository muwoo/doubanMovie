/**
 * @author monkeywang
 * Date: 17/3/15
 */
import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'
const state = {
  title: 'doubanMovie',
  movingList: {
    subjects: []
  },
  searchList: {
    subjects: []
  },
  searchText: '',
  loadingMoving: true,
  loadingUpComing: true,
  searchLoading: true,
  pageload: false,
  upcomBody: {
    start: 0,
    pageload: false
  },
  loadingDetail: true,
  upcomBody: {},
  ranking250: {},
  city: '杭州',
  movieDetail: {
    rating: {},
    images: {}
  },
  id:'',
  start:0,
  movieComment: {} //电影短评
}

export default {
  state,
  getters,
  actions,
  mutations
}
