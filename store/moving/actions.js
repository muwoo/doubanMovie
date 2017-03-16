/**
 * @author monkeywang
 * Date: 17/3/15
 */
import * as types from './types'
import {Utils} from '../../src/common/util'

let utils = new Utils()
export const actions = {
  /**
   * 获取电影列表
   * @param commit
   */
  getMoving({commit, state}){
    utils.get('/movie/in_theaters', {city: state.city}).then(res => {
      commit('MOVING_LIST', {list: res})
      commit('MOVING_LOADING', {loading: false})
    })
  },
  /**
   * 获取当前城市即将上映电影列表
   * @param commit
   * @param state
   */
  getUpcoming({commit, state}){
    utils.get('/movie/coming_soon', {city: state.city}).then(res => {
      commit('UP_COMBODY', {upcomBody: res})
      commit('UP_COMING', {loading: false})
    })
  }
}
