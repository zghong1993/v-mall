 import fetch from '@/config/fetch'

 const getHomeList = () => fetch({ url: '/api/wens/item/for-home-page', data: { shopId: 12, type: 1, size: 9 } })
 const hotcity = () => fetch({ url: '/api/config/find', data: { keys: 'carousel', shopId: 12, endpoint: 2 } })


 export default {
   getHomeList,
   hotcity,
 }
