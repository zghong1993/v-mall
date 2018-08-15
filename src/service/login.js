import { GET, POST } from '@/utils/fly'

const login = ({ username, password }) => POST({ url: '/api/user/login', param: { loginBy: username, type: 1, password } })

const checkLogin = () => fetch({ url: '/api/user' })

export default {
  login,
  checkLogin,
}
