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
    async handleLogin() {
      const result = await this.$validator.validateAll()
      if (result) {
        const res = await loginServ.login({ username: this.username, password: this.password }) || {}
        res.redirect && this.$router.push({ path: res.redirect })
      }
    },
  },
}
