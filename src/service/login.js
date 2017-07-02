 import fetch from '@/config/fetch'

 const login = ({ username, password }) => fetch({ url: '/api/user/login', type: 'post', data: { loginBy: username, type: 3, password, shopId: 12 } })

 const checkLogin = () => { fetch({ url: '/api/user' }) }


 export default {
   login,
   checkLogin,
 }
