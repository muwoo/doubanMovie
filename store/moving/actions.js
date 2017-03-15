/**
 * @author monkeywang
 * Date: 17/3/15
 */
import * as types from './types'
import {Utils} from '../../src/common/util'

let utils = new Utils()
export const actions = {
  getMoving({commit}){
    utils.get('/movie/in_theaters', {}).then(res => {
      commit('MOVING_LIST', {list: res});
      commit('MOVING_LOADING', {loading: false});
    })
  },
  getUpcoming({commit}){

    utils.get('/movie/coming_soon', {}).then(res => {
    	console.log(res)
      commit('UP_COMBODY', {upcomBody: res})
    })
  	
  }
}
