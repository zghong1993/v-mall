import {
  Toast,
} from 'mint-ui'

const Hello = {
  name: 'hello',
  data() {
    return {
      msg: 'hello',
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

export default Hello
