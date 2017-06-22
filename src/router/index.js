import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['../components/home/index.vue'], resolve)

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home,
  }],
})
