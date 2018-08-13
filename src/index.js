// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint, { Lazyload } from 'mint-ui'

import _ from 'lodash'
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'

require('normalize.css')
require('mint-ui/lib/style.css')
require('./assets/css/mint-ui-reset.less')
require('./assets/css/reset.less')
require('./assets/css/lib.less')

import App from './app'
/* eslint import/extensions: "off" */
import router from './router'
import store from './store'


// add lodash 插件
Object.defineProperty(Vue.prototype, '_', { value: _, enumerable: false })

Vue.use(VueI18n)
Vue.use(VeeValidate)
Vue.use(Mint)
Vue.use(Lazyload, {
  preLoad: 1.3,
  attempt: 1,
})
Vue.config.productionTip = false


const i18n = new VueI18n({ locale: 'en' })

/* eslint-disable no-new */

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: { App },
})
