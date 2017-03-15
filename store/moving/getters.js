/**
 * @author monkeywang
 * Date: 17/3/15
 */
export const getters = {
  title: state => {
    return state.title
  },
  movingList: state => {
    return state.movingList
  },
  loadingMoving: state => {
    return state.loadingMoving
  }
}
