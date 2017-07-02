import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Home = resolve => require(['@/components/home/index.vue'], resolve)
const Category = resolve => require(['@/components/category/index.vue'], resolve)
const Item = resolve => require(['@/components/item/index.vue'], resolve)
const Login = resolve => require(['@/components/login/index.vue'], resolve)

// user
const UserIndex = resolve => require(['@/components/user/index/index.vue'], resolve)
const UserCenter = resolve => require(['@/components/user/user_center/index.vue'], resolve)

// trade
const TradeIndex = resolve => require(['@/components/trade/index/index.vue'], resolve)
const Cart = resolve => require(['@/components/trade/cart/index.vue'], resolve)


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
    {
      path: '/user',
      component: UserIndex,
      children: [
        {
          path: '',
          component: UserCenter,
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
