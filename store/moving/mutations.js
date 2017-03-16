/**
 * @author monkeywang
 * Date: 17/3/15
 */
import * as types from './types'
export const mutations = {
  [types.MOVING_TITLE] (state, {title}){
    state.title = title
  },
  [types.MOVING_LIST] (state, {list}){
    state.movingList = list
  },
  [types.MOVING_LOADING] (state, {loading}){
    state.loadingMoving = loading
  },
  [types.UP_COMBODY] (state, {upcomBody}){
    state.upcomBody = upcomBody
  },
  [types.MOVIE_CITY] (state, {city}){
    state.city = city
    state.loadingMoving = true
  },
  [types.UP_COMING] (state, {loading}){
    state.loadingUpComing = loading
  },
  [types.LOAD_TOP250] (state, {ranking250}){
    state.ranking250 = ranking250
  },
  [types.PAGE_START] (state, {start}){
    state.start = start
  },
  [types.SEARCH_TEXT] (state, {searchText}){
    state.searchText = searchText
  },
  [types.SEARCH_LIST] (state, {searchList}){
    state.searchList = searchList
  },
  [types.SEARCH_LOADING] (state, {loading}){
    state.searchLoading = loading
  }
}
