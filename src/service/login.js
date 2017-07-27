 import fetch from '@/utils/fetch'

 const login = ({ username, password }) => fetch({ url: '/api/user/login', type: 'post', data: { loginBy: username, type: 1, password } })

 const checkLogin = () => fetch({ url: '/api/user' })

 export default {
   login,
   checkLogin,
 }
