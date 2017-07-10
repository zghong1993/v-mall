import { baseUrl } from '@/config/env'


const JSON_TYPE = 'application/json;charset=utf-8'

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
      if (response.headers.get('Content-Type') === JSON_TYPE) {
        const responseJson = await response.json()
        return responseJson
      }
      const responseText = await response.text()
      return Promise.resolve({ responseText, status: response.status })
    } catch (error) {
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
