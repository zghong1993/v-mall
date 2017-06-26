 const getHomeInfo = () => {}
 const hotcity = () => fetch('/v1/cities', {
   type: 'hot',
 })


 export default {
   getHomeInfo,
   hotcity,
 }
