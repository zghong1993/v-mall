import { baseUrl } from '@/config'
import { Toast } from 'mint-ui'

export default async({ url = '', data = {}, type = 'GET', method = 'fetch' }) => {
  type = type.toUpperCase()
  url = baseUrl + url
  if (type === 'GET') {
    let dataStr = ''
    Object.keys(data).forEach(key => {
      dataStr += `${key}=${data[key]}&`
    })
    if (dataStr !== '') {
      dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
      url = `${url}?${dataStr}`
    }
  }
  if (window.fetch && method === 'fetch') {
    const requestConfig = {
      credentials: 'include', // 传cookie
      method: type,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      cache: 'force-cache',
    }
    if (type === 'POST') {
      Object.defineProperty(requestConfig, 'body', {
        value: JSON.stringify(data),
      })
    }
    try {
      const response = await fetch(url, requestConfig)
      const contentType = response.headers.get('content-type')
      let responseData = ''
      if (contentType && contentType.indexOf('application/json') !== -1) {
        responseData = await response.json()
      } else {
        responseData = await response.text()
      }
      if ((response.status >= 200 && response.status <= 300) || response.status === 304) {
        return responseData
      }
      return Promise.reject(responseData)
    } catch (error) {
      Toast({
        message: error,
        duration: 1500,
      })
      throw new Error(error)
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest()
      } else {
        /*eslint-disable */
        requestObj = new ActiveXObject
      }
      let sendData = ''
      if (type === 'POST') {
        sendData = JSON.stringify(data)
      }
      requestObj.open(type, url, true)
      requestObj.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
      requestObj.send(sendData)
      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.status === 200) {
            let obj = requestObj.response
            if (typeof obj !== 'object') {
              obj = JSON.parse(obj)
            }
            resolve(obj)
          } else {
            reject(requestObj)
          }
        }
      }
    })
  }
}
