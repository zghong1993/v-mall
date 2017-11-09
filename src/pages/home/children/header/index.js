import { getPosition } from '@/utils/util'
import { TOGGLE_SEARCH } from '@/store/mutation-types'

export default {
  name: 'header',
  props: [],
  data() {
    return {
      cityName: '定位中',
      locationWrap: {
        background: 'rgba(255, 255, 255,0)',
        color: '#000',
      },
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
    window.addEventListener('scroll', this.handleScroll.bind(this))
  },
  methods: {
    showSearch() {
      this.$store.commit(TOGGLE_SEARCH, true)
    },
    // toggle header bakground
    handleScroll() {
      const { scrollY } = window
      const locationOpacity = Math.min(1.0, scrollY / 100) < 0 ? 0 : Math.min(1.0, scrollY / 100)
      this.locationWrap = {
        background: `rgba(255,255,255,${locationOpacity})`,
        color: '#000',
      }
    },
  },
}
