/**
 * @author monkeywang
 * Date: 17/3/14
 */
import Vue from 'vue'
import $http from 'vue-resource'
Vue.use($http)

let vm = new Vue()

const configPath = '/api'
window.configPath = configPath

export class Utils {
  get (url, data = {}) {
    url = configPath + url
    return new Promise((resolve, reject) => {
      vm.$http.get(url, {params: data, credentials: true}).then((response) => {
        resolve(response.body)
      }, function () {
        console.log('接口异常')
      })
    })
  }

  // 获取滚动条当前的位置
  getScrollTop () {
    let scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      scrollTop = document.body.scrollTop
    }
    return scrollTop
  }
  // 获取当前可是范围的高度
  getClientHeight () {
    let clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    } else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    }
    return clientHeight
  }
  // 获取文档完整的高度
  getScrollHeight () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  }
}
