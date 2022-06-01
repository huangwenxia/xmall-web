import { useNavigate, useLocation } from "react-router-dom"
import axios, { AxiosRequestConfig } from "axios"
import { Storage } from "@/utils/Storage"

// 取消重复请求
const pending = []
const CancelToken = axios.CancelToken
// axios 实例
const instance = axios.create({
  baseURL: import.meta.env.BASE_URL,
  timeout: 60000,
  responseType: "json",
})

// 移除重复请求
const removePending = (config) => {
  for (const key in pending) {
    const pendIndex = +key
    const list = pending[key+'']
    // 当前请求在数组中存在时执行函数体
    if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
      // 执行取消操作
      list.cancel("操作太频繁，请稍后再试")
      // 从数组中移除记录
      pending.splice(pendIndex, 1)
    }
  }
}

// 添加请求拦截器
instance.interceptors.request.use(
  (request) => {
    if (!/^\/api/.test(request.url || "")) {
      request.url = "/api" + request.url
    }
    const token = Storage.get("token")
    if (token) {
      request.headers.authorization = token
    }
    removePending(request)
    const method= request.method
    request.cancelToken = new CancelToken((c) => {
      pending.push({
        url: request.url,
        method,
        params: request.params,
        data: request.data,
        cancel: c,
      })
    })

    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 添加响应拦截器
instance.interceptors.response.use(
  (response) => {
    removePending(response.config)
    // const navigate = useNavigate()
    // const location = useLocation()
    const errorCode = response?.data?.status
    if (errorCode !== 200) {
      // if (errorCode === 401 && location.pathname != "/login") {
      //   navigate("/login")
      // }
      return Promise.reject({ ...response.data })
    }

    return response
  },
  (error) => {
    const response = error.response
    // eslint-disable-next-line
    return Promise.reject((response && response.data) || { message: error.message })
  }
)

export default instance
