/* global _ : true */

const formatPrice = (e) => (e / 100).toFixed(2)
const currency = (e) => `￥${e}`


const formatDate = (date, type = 'Y-M-D h:m:s') => {
  let timestamp = parseInt(date, 10)
  let myDate
  let hour
  let time
  if (date) {
    if (timestamp < 10000) {
      timestamp = date
    }
    if (_.isNumber(timestamp)) {
      myDate = new Date(timestamp)
    } else {
      myDate = new Date(timestamp.replace(/-/g, '/'))
    }
    hour = myDate.getHours()
  } else {
    myDate = new Date()
    hour = myDate.getHours()
  }
  const Y = myDate.getFullYear()
  const M = myDate.getMonth() + 1 < 10 ? `0${myDate.getMonth() + 1}` : myDate.getMonth() + 1
  const D = myDate.getDate() < 10 ? `0${myDate.getDate()}` : myDate.getDate()
  const h = hour < 10 ? `0${hour}` : hour
  const m = myDate.getMinutes() < 10 ? `0${myDate.getMinutes()}` : myDate.getMinutes()
  const s = myDate.getSeconds() < 10 ? `0${myDate.getSeconds()}` : myDate.getSeconds()
  time = type.replace('Y', Y)
  time = time.replace('M', M)
  time = time.replace('D', D)
  time = time.replace('h', h)
  time = time.replace('m', m)
  time = time.replace('s', s)
  return time
}


export {
  formatPrice,
  formatDate,
  currency,
}
