import {
  Toast,

} from 'mint-ui'


import AppHeader from '@/components/common/header/index.vue'
import AppFooter from '@/components/common/footer/index.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter,

  },
  data() {
    return {
      msg: 'index',
    }
  },
  methods: {
    handleClick() {
      Toast({
        message: '提示',
        position: 'center',
        duration: 5000,
      })
    },
  },
}
