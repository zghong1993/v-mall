import { TOGGLE_SEARCH } from './mutation-types'

export default {
  [TOGGLE_SEARCH](state, e) {
    state.showSearch = e
  },
}
