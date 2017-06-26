import AppHeader from '@/components/common/header/index.vue'
import AppFooter from '@/components/common/footer/index.vue'
import { homeService } from '@/service'

homeService.hotcity().then(data => { console.log(data) })

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
