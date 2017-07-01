 import fetch from '@/config/fetch'

 const login = () => fetch({ url: '/api/user/login', type: 'post', data: { loginBy: 13110030731, type: 3, password: '123456', shopId: 12 } })


 export default {
   login,
 }
