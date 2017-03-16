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
  loadingMoving: true,
  loadingUpComing: true,
  upcomBody: {},
  ranking250:{},
  city: '杭州',
  upcomBody: {},
  movieDetail:{},
  id:''
}

export default {
  state,
  getters,
  actions,
  mutations
}
