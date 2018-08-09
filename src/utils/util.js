/**
 * 存储localStorage
 */
const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem(name, content)
}

/**
 * 获取localStorage
 */
const getStore = (name) => {
  if (!name) return
  try {
    return JSON.parse(window.localStorage.getItem(name))
  } catch (error) {
    return window.localStorage.getItem(name)
  }
}

/**
 * 删除localStorage
 */

const removeStore = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}

const localStorage = { setStore, getStore, removeStore }

// 高德定位
const getPosition = () => {
  let AMap
  const mapObj = AMap && new AMap.Map('iCenter')
  return new Promise((resove, reject) => {
    if (mapObj) {
      mapObj.plugin('AMap.Geolocation', () => {
        const geolocation = new AMap.Geolocation({
          timeout: 10000,
          noIpLocate: 0,
          noGeoLocation: 0,
          extensions: 'all',
        })
        geolocation.getCurrentPosition((status, result) => {
          resove({ status, result })
        })
      })
    } else {
      reject('定位失败')
    }
  })
}

export {
  localStorage,
  getPosition,
}
