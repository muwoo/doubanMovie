/**
 * @author monkeywang
 * Date: 17/3/15
 */
export const getters = {
  title: state => {
    return state.title
  },
  movingList: state => {
    for(let subject of state.movingList.subjects){
      subject.rating.average = subject.rating.average/2
    }
    return state.movingList
  },
  loadingMoving: state => {
    return state.loadingMoving
  },
  upcomBody: state => {
    return state.upcomBody
  },
  city: state => {
    return state.city
  }
}
