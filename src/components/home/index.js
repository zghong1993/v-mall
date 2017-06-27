import AppHeader from '@/components/common/header/index.vue'
import AppFooter from '@/components/common/footer/index.vue'
import { homeServ } from '@/service'
import { formatPrice, currency } from '@/config/filter'

import Search from './children/search/index.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppFooter,
    Search,

  },
  filters: {
    formatPrice,
    currency,
  },
  data() {
    return {
      colorIsActive: false,
      homeList: '',
      showSearch: false,
    }
  },
  created() {
    homeServ.getHomeList().then(d => this.homeList = d)
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
    handleShowSearch() {
      this.showSearch = true
    },
    handleHideSearch() {
      this.showSearch = false
    },
  },
}
