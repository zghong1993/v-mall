export const getHomeInfo = () => {
  console.log('d')
}

export const hotcity = () => fetch('/v1/cities', {
  type: 'hot',
})
