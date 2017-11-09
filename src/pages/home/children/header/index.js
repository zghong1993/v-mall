import { getPosition } from '@/utils/util'
import { TOGGLE_SEARCH } from '@/store/mutation-types'

export default {
  name: 'header',
  props: [],
  data() {
    return {
      cityName: '',
      colorIsActive: false,
    }
  },
  created() {
    getPosition().then(e => {
      if (e && e.status === 'complete') {
        this.cityName = e.result.addressComponent.city
      }
    })
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    showSearch() {
      this.$store.commit(TOGGLE_SEARCH, true)
    },
    // toggle header bakground
    handleScroll() {
      const { scrollY } = window
      // const headerOpacity = Math.min(1.0, scrollY / 30) < 0 ? 0 : Math.min(1.0, scrollY / 30)
      if (scrollY > 50) {
        this.colorIsActive = true
      } else {
        this.colorIsActive = false
      }
    },
  },
}
