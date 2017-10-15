import AppFooter from '@/pages/common/footer/index'
import { homeServ } from '@/service'
import { formatPrice, currency } from '@/utils/filter'
import AppHeader from './children/header/index.vue'

import enLocale from './locales/en_US.json'

import Search from './children/search/index.vue'

export default {
  name: 'Home',
  i18n: enLocale,
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
      bannerHeight: '',
    }
  },
  created() {
    const bannerImageRadio = 720 / 322
    this.bannerHeight = `${(screen.width * 2) / bannerImageRadio}px`
    homeServ.getHomeList().then(d => this.homeList = d)
  },
  methods: {
    // toggle header bakground
    handleScroll(e) {
      console.log(e)
      const scrollTop = e.target.scrollTop
      if (scrollTop > 50) {
        this.colorIsActive = true
      } else {
        this.colorIsActive = false
      }
    },
  },
}
