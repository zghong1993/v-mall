import { GET, POST } from '@/utils/fly'

const getHomeList = () => GET({ url: '/api/items', param: { ids: '964,952,925,917,853,311,802,481,397,359,358,340,2155,1587,1395,1557,1506,1550,1428,2963,1535,1636,1338' } })
const hotcity = () => GET({ url: '/api/config/find', param: { keys: 'carousel', shopId: 12, endpoint: 2 } })


export default {
  getHomeList,
  hotcity,
}
