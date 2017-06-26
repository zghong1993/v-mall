import { getPosition } from '@/config/util'

export default {
  name: 'header',
  props: ['colorIsActive'],
  data() {
    return {}
  },
  mounted() {
    getPosition().then(e => console.log(e))
  },
  methods: {},
}
