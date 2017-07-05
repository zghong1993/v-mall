 import fetch from '@/config/fetch'

 const getHomeList = () => fetch({ url: '/api/items', data: { ids: '5001,5002,5003,5004,5005,5006,5007,5008,5000' } })
 const hotcity = () => fetch({ url: '/api/config/find', data: { keys: 'carousel', shopId: 12, endpoint: 2 } })


 export default {
   getHomeList,
   hotcity,
 }
