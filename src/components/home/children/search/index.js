export default {
  name: 'Search',
  data() {
    return {}
  },
  props: ['showSearch'],
  methods: {
    hideSearch() {
      this.$emit('handleHideSearch')
    },
  },
}
