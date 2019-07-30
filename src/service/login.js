import { POST, GET } from '@/utils/fly'

const login = ({ username, password }) => POST({ url: '/api/user/login', param: { loginBy: username, type: 1, password } })

const checkLogin = () => GET({ url: '/api/user' })

export default {
  login,
  checkLogin,
}
