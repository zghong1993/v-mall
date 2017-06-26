const formatPrice = (e) => (e / 100).toFixed(2)
const currency = (e) => `￥${e}`


const formatDate = () => {}

export {
  formatPrice,
  formatDate,
  currency,
}
