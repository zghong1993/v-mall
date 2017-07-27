import fetch from '@/utils/fetch'

const getItemDetail = ({ itemId }) => fetch({ url: `/api/mobile/item/${itemId}` })

export default {
  getItemDetail,

}
