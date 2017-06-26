import AppHeader from '@/components/common/header/index.vue'
import AppFooter from '@/components/common/footer/index.vue'

import homeService from '@/service'
console.log(homeService)

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter,

  },
  data() {
    return {
      colorIsActive: false,
    }
  },
  methods: {
    handleScroll(e) {
      const scrollTop = e.target.scrollTop
      if (scrollTop > 50) {
        this.colorIsActive = true
      } else {
        this.colorIsActive = false
      }
    },
  },
}
