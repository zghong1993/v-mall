// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Mint from 'mint-ui'
import _ from 'lodash'
import VeeValidate from 'vee-validate'
import VueI18n from 'vue-i18n'

require('./assets/css/normalize.less')
require('./assets/css/mint-ui.less')
require('./assets/css/mint-ui-reset.less')
require('./assets/css/lib.less')

import App from './app'
/* eslint import/extensions: "off" */
import router from './router.js'
import store from './store'


// add lodash 插件
Object.defineProperty(Vue.prototype, '_', { value: _, enumerable: false })

Vue.use(VueI18n)
Vue.use(VeeValidate)
Vue.use(Mint)
Vue.config.productionTip = false


const i18n = new VueI18n({
  locale: 'en', // set locale
})

/* eslint-disable no-new */

new Vue({
  el: '#app',
  i18n,
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
})
