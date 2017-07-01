import Vue from 'vue'
import Router from 'vue-router'

const Home = resolve => require(['../components/home/index.vue'], resolve)
const Category = resolve => require(['../components/category/index.vue'], resolve)
const Item = resolve => require(['../components/item/index.vue'], resolve)
const Login = resolve => require(['../components/login/index.vue'], resolve)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/item',
      component: Item,
    },
    {
      path: '/login',
      component: Login,
    },
  ],
})
