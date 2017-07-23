// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import _ from 'lodash'
import VeeValidate from 'vee-validate'


import './assets/css/normalize.css'
import './assets/css/reset.less'


import App from './app'
/* eslint import/extensions: "off" */
import router from './router.js'
import store from './store'

// add lodash 插件
Object.defineProperty(Vue.prototype, '_', { value: _, enumerable: false })


Vue.use(VeeValidate)
Vue.use(Mint)
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
})
