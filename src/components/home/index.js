import {
  Toast,
} from 'mint-ui'
import Header from '@/components/common/header/index.vue'

export default {
  name: 'Home',
  components: {
    appHeader: Header,
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
        position: 'bottom',
        duration: 5000,
      })
    },
  },
}
