import { baseUrl } from '@/config'
import { Toast } from 'mint-ui'

export default async({ url = '', data = {}, type = 'GET' }) => {
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
    Object.defineProperty(requestConfig, 'body', { value: JSON.stringify(data) })
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
    Toast({
      message: responseData,
      duration: 1500,
    })
    return Promise.reject(responseData)
  } catch (error) {
    Toast({
      message: error,
      duration: 1500,
    })
    throw new Error(error)
  }
}
