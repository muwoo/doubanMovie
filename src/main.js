// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from './common/element-ui-import'
import App from './App'
import router from './router'
import store from './store'
require.ensure([], function () {
  require('element-ui/lib/theme-default/index.css')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
