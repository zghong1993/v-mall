import { loginServ } from '@/service'

export default {
  name: 'Login',
  components: {},
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    handleLogin() {
      loginServ.login().then(() => this.$router.push({ path: '/' }))
    },
  },
}
