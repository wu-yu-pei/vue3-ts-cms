import WyRequest from './request'
import { BASE_URL, TIME_OUT } from './request/config'
import LocalCache from '../utils/cache'
const Wyrequest = new WyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptors: (config) => {
      // 拦截此请求 使其携带tocken
      const token = LocalCache.get('token')

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      // console.log('请求拦截成功')
      return config
    },
    requestInterceptorsCatch: (err) => {
      // console.log('请求拦截失败')
      return err
    },
    respoonseInterceptors: (res) => {
      // console.log('响应拦截成功')
      return res
    },
    respoonseInterceptorsCatch: (err) => {
      // console.log('响应拦截失败')
      return err
    }
  }
})

export { Wyrequest }
