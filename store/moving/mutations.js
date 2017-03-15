/**
 * @author monkeywang
 * Date: 17/3/15
 */
import * as types from './types'
export const mutations = {
  [types.MOVING_TITLE] (state, {title}){
    state.title = title
  }
}
