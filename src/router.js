import Vue from 'vue'
import Router from 'vue-router'
import { loginServ } from './service'

Vue.use(Router)

const Home = () => import('@/pages/home/index.vue')
const Category = () => import('@/pages/category/index.vue')
const Item = () => import('@/pages/item/index.vue')
const Login = () => import('@/pages/login/index.vue')

// user
const UserIndex = () => import('@/pages/user/index/index.vue')
const UserCenter = () => import('@/pages/user/user_center/index.vue')

// item

const Search = () => import('@/pages/search/index.vue')

// trade
const TradeIndex = () => import('@/pages/trade/index/index.vue')
const Cart = () => import('@/pages/trade/cart/index.vue')

// call fun
const checkLogin = (to, from, next) => {
  loginServ.checkLogin().then(
    () => {
      next()
    },
    () => {
      next('/login')
    },
  )
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      meta: {
        keepAlive: true,
      },
    },
    {
      path: '/index',
      component: Home,
      meta: {
        keepAlive: true,
      },
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
