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
  upcomBody: {},
  ranking250:{},
  city: '杭州',
  start:0
}

export default {
  state,
  getters,
  actions,
  mutations
}
