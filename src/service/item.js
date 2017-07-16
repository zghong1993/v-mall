import { fetch } from '@/config/fetch'

const getItemDetail = ({ itemId }) => fetch({ url: `/api/mobile/item/${itemId}` })

export default {
  getItemDetail,

}
