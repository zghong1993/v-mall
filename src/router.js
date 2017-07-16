import Vue from 'vue'
import Router from 'vue-router'
import { loginServ } from './service'


Vue.use(Router)

const Home = resolve => require(['@/pages/home/index.vue'], resolve)
const Category = resolve => require(['@/pages/category/index.vue'], resolve)
const Item = resolve => require(['@/pages/item/index.vue'], resolve)
const Login = resolve => require(['@/pages/login/index.vue'], resolve)

// user
const UserIndex = resolve => require(['@/pages/user/index/index.vue'], resolve)
const UserCenter = resolve => require(['@/pages/user/user_center/index.vue'], resolve)

// item

const Search = resolve => require(['@/pages/search/index.vue'], resolve)


// trade
const TradeIndex = resolve => require(['@/pages/trade/index/index.vue'], resolve)
const Cart = resolve => require(['@/pages/trade/cart/index.vue'], resolve)


// call fun
const checkLogin = (to, from, next) => {
  loginServ.checkLogin().then(() => {
    next()
  }, () => {
    next('/login')
  })
}


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/index',
      component: Home,
    },
    {
      path: '/search',
      component: Search,
    },
    {
      path: '/category',
      component: Category,
    },
    {
      path: '/item/:itemId',
      component: Item,
    },
    {
      path: '/login',
      component: Login,
    },
    {
      path: '/user',
      component: UserIndex,
      beforeEnter: checkLogin,
      children: [
        {
          path: '',
          component: UserCenter,
          meta: { requiresAuth: true },
        },
      ],
    },
    {
      path: '/trade',
      component: TradeIndex,
      children: [
        {
          path: 'cart',
          component: Cart,
        },
      ],
    },
  ],
})
