import { getPosition } from '@/config/util'

export default {
  name: 'header',
  props: ['colorIsActive'],
  data() {
    return {
      cityName: '',
    }
  },
  created() {
    getPosition().then(e => {
      if (e && e.status === 'complete') {
        this.cityName = e.result.addressComponent.city
      }
    })
  },
  methods: {
    showSearch() {},
  },
}
