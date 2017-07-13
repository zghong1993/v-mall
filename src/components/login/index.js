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
      loginServ.login({ username: this.username, password: this.password }).then(() => this.$router.push({ path: '/' }))
    },
    aa() {
      console.log('d')
    },
  },
}
