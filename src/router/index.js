import Vue from 'vue'
import Router from 'vue-router'
import routerMap from './routerMap'

Vue.use(Router)

function lazyLoad (path) {
  return resolve => require(['@/' + path + '.vue'], resolve)
}

let routers = []
for (let key in routerMap) {
  if ({}.hasOwnProperty.call(routerMap, key)) {
    let item = {}
    item.name = routerMap[key].name
    item.path = key
    item.component = lazyLoad(routerMap[key].path)
    routers.push(item)
  }
}
/**
 * 路由信息配置
 */
export default new Router({
  mode: 'history',
  routes: routers
})
