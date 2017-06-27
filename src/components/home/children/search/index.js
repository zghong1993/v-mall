import { TOGGLE_SEARCH } from '@/store/mutation-types'

export default {
  name: 'Search',
  data() {
    return {}
  },
  props: ['showSearch'],
  computed: {
    searchDisplay() {
      return this.$store.state.showSearch
    },
  },
  methods: {
    hideSearch() {
      this.$store.commit(TOGGLE_SEARCH, false)
    },
  },
}
