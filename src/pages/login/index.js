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
      this.$validator.validateAll().then(result => {
        if (result) {
          return loginServ.login({ username: this.username, password: this.password }).then(
            () => this.$router.push({ path: '/' }),
          )
        }
      })
    },
  },
}
