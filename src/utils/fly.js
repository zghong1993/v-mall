import fly from 'flyio'

//添加请求拦截器
fly.interceptors.request.use((request) => {
  //给所有请求添加自定义header
  // request.headers["X-Tag"] = "flyio";
  request.baseURL = "https://m.idf66.com"
  //打印出请求体
  console.log(request.body)
  //终止请求
  //var err=new Error("xxx")
  //err.request=request
  //return Promise.reject(new Error(""))

  //可以显式返回request, 也可以不返回，没有返回值时拦截器中默认返回request
  return request;
})

//添加响应拦截器，响应拦截器会在then/catch处理之前执行
fly.interceptors.response.use(
  (response) => {
    //只将请求结果的data字段返回
    return response.data
  },
  (err) => {
    return Promise.resolve("ssss")
  }
)


const paramConvert = (url, param = {}) => {
  let paramStr = ''
  Object.keys(param).forEach(key => {
    paramStr += `${key}=${param[key]}&`
  })
  if (paramStr !== '') {
    paramStr = paramStr.substr(0, paramStr.lastIndexOf('&'))
    url = `${url}?${paramStr}`
  }
  return url
}



const GET = async ({ url, param }) => {
  const newUrl = paramConvert(url, param)
  try {
    const response = await fly.get(newUrl)
    return Promise.resolve(response)
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}



const POST = ({ url, param = {} }) => {
  fly.post(url, param)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

}

const DELETE = () => {
}



export {
  GET, POST, DELETE
}
