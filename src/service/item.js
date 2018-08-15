import { GET } from '@/utils/fly'

const getItemDetail = ({ itemId }) => GET({ url: `/api/mobile/item/${itemId}` })

export default {
  getItemDetail,

}
