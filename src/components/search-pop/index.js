import { TOGGLE_SEARCH } from '@/store/mutation-types'
import { localStorage } from '@/utils/util'

export default {
  name: 'Search',
  data() {
    return {
      searchHistory: localStorage.getStore('searchHistory') || '',
    }
  },
  props: ['showSearch'],
  created() { },
  updated() {
    this.searchHistory = localStorage.getStore('searchHistory') || ''
  },
  computed: {
    searchDisplay() {
      return this.$store.state.showSearch
    },
  },
  methods: {
    hideSearch() {
      this.$store.commit(TOGGLE_SEARCH, false)
    },
    handleSearch(e) {
      const searchValue = e.currentTarget.value
      if (searchValue) {
        const searchHistory = localStorage.getStore('searchHistory') || []
        if (!searchHistory.includes(searchValue)) {
          searchHistory.push(searchValue)
        }
        localStorage.setStore('searchHistory', searchHistory)
        this.$router.push('/search')
      }
    },
    clearSearchHistory() {
      localStorage.removeStore('searchHistory')
      this.searchHistory = ''
    },
  },

}
