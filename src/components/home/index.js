import AppHeader from '@/components/common/header/index.vue'
import AppFooter from '@/components/common/footer/index.vue'
import { homeSer } from '@/service'

import { formatPrice, currency } from '@/config/filter'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter,

  },
  filters: {
    formatPrice,
    currency,
  },
  data() {
    return {
      colorIsActive: false,
      homeList: '',
    }
  },
  created() {
    homeSer.getHomeList().then(d => this.homeList = d)
  },
  methods: {
    // toggle header bakground
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
