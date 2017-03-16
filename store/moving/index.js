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
  city: '杭州'
}

export default {
  state,
  getters,
  actions,
  mutations
}
