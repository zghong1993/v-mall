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
      this.$store.commit('TOGLE_SEARCH', false)
    },
  },
}
