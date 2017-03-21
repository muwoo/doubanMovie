/**
 * @author monkeywang
 * Date: 17/3/15
 */
import Vue from 'vue'
import Vuex from 'vuex'
import moving from './moving/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    moving
  }
})
