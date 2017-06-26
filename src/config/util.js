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
  return window.localStorage.getItem(name)
}

/**
 * 删除localStorage
 */

const removeStore = (name) => {
  if (!name) return
  window.localStorage.removeItem(name)
}

const localStorage = { setStore, getStore, removeStore }

const getPosition = async() => {
  /* eslint-disable no-undef */
  const mapObj = new AMap.Map('iCenter')
  /* eslint-disable no-shadow */
  return new Promise((resove) => {
    mapObj.plugin('AMap.Geolocation', () => {
      const geolocation = new AMap.Geolocation({
        timeout: 10000,
        noIpLocate: 0,
        noGeoLocation: 0,
        extensions: 'all',
      })
      /* eslint-disable no-shadow */
      resove(new Promise((resove) => {
        geolocation.getCurrentPosition((status, result) => {
          resove({ status, result })
        })
      }))
    })
  })
}

export {
  localStorage,
  getPosition,
}
