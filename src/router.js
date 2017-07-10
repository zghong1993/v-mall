import Vue from 'vue'
import Router from 'vue-router'
import { loginServ } from './service'


Vue.use(Router)

const Home = resolve => require(['@/components/home/index.vue'], resolve)
const Category = resolve => require(['@/components/category/index.vue'], resolve)
const Item = resolve => require(['@/components/item/index.vue'], resolve)
const Login = resolve => require(['@/components/login/index.vue'], resolve)

// user
const UserIndex = resolve => require(['@/components/user/index/index.vue'], resolve)
const UserCenter = resolve => require(['@/components/user/user_center/index.vue'], resolve)

// item

const Search = resolve => require(['@/components/search/index.vue'], resolve)


// trade
const TradeIndex = resolve => require(['@/components/trade/index/index.vue'], resolve)
const Cart = resolve => require(['@/components/trade/cart/index.vue'], resolve)


// call fun
const checkLogin = (to, from, next) => {
  loginServ.checkLogin().then((e) => {
    if (e.status === 404) {
      return next('/login')
    }
    return next()
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
