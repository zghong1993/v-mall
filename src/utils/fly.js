import fly from 'flyio'
import { Toast } from 'mint-ui'
import { BASE_URL } from '@/config'


// 添加请求拦截器
fly.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers['X-from'] = 'kokiy'
  request.baseURL = BASE_URL
  request.withCredentials = true
  request.timeout = 90000
  // 终止请求
  // var err=new Error("xxx")
  // err.request=request
  // return Promise.reject(new Error(""))

  // 可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request
})

// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (res) => {
    if ((res.status >= 200 && res.status <= 300) || res.status === 304) {
      return res.data
    }
    throw new Error(res)
  },
  (err) => {
    const errMessage = ['网络错误', '请求超时']
    Toast({
      message: errMessage[err.status] || err.message,
      duration: 1500,
    })
    return Promise.reject(err)
  },
)


const GET = async ({ url, param }) => {
  try {
    const response = await fly.get(url, param)
    return Promise.resolve(response)
  } catch (error) {
    console.error(error)
  }
}


const POST = async ({ url, param = {} }) => {
  try {
    const response = await fly.post(url, param, {})
    return Promise.resolve(response)
  } catch (error) {
    console.error(error)
  }
}


export {
  GET, POST,
}
