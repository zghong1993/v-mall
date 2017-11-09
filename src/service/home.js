import fetch from '@/utils/fetch'

const getHomeList = () => fetch({ url: '/api/items', data: { ids: '964,952,925,917,853,311,802,481,397,359,358,340' } })
const hotcity = () => fetch({ url: '/api/config/find', data: { keys: 'carousel', shopId: 12, endpoint: 2 } })


export default {
  getHomeList,
  hotcity,
}
