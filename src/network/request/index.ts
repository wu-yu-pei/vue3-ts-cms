import axios, { AxiosInstance } from 'axios'
import { ElLoading } from 'element-plus'
import { ILoadingInstance } from 'element-plus/lib/el-loading/src/loading.type'
import type { WyRequestConfig, WyRequestInterceptors } from './type'
const DEFAULT_LOADING = false

class WyRequest {
  instance: AxiosInstance
  interceptors?: WyRequestInterceptors
  showLoading: boolean
  loading?: ILoadingInstance

  constructor(config: WyRequestConfig) {
    this.instance = axios.create(config)
    this.interceptors = config.interceptors
    this.showLoading = config.showLoading ?? DEFAULT_LOADING

    // 拦截器的封装(某个实例传了才有,不传就没有)
    this.instance.interceptors.request.use(
      config.interceptors?.requestInterceptors,
      config.interceptors?.requestInterceptorsCatch
    )

    this.instance.interceptors.response.use(
      config.interceptors?.respoonseInterceptors,
      config.interceptors?.respoonseInterceptorsCatch
    )

    // 所有实例都会有的拦截器,不穿也会有
    this.instance.interceptors.request.use(
      (config) => {
        // loading加载动画
        if (this.showLoading) {
          this.loading = ElLoading.service({
            lock: true,
            background: 'rgba(0,0,0,0.5)'
          })
        }
        // console.log('我是所有实例都会有的请求成功拦截器')
        return config
      },
      (err) => {
        // console.log('我是所有实例都会有的请求失败拦截器')
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        // 响应成功关闭loading
        this.loading?.close()
        // console.log('我是所有实例都会有的响应成功拦截器')
        return res.data
      },
      (err) => {
        // 响应失败关闭loading
        // console.log('我是所有实例都会有的响应失败拦截器')
        return err
      }
    )
  }

  request<T = any>(config: WyRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      if (config.interceptors?.requestInterceptors) {
        config = config.interceptors.requestInterceptors(config)
      }
      if (config.showLoading === false) {
        this.showLoading = false
      }
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.interceptors?.respoonseInterceptors) {
            res = config.interceptors.respoonseInterceptors(res)
          }
          resolve(res)
          // 最后需要把这个值设为true 因为下一此的loading可能是true
          this.showLoading = DEFAULT_LOADING
        })
        .catch((err) => {
          // 最后需要把这个值设为true 因为下一此的loading可能是true
          this.showLoading = DEFAULT_LOADING
          reject(err)
          return err
        })
    })
  }
  // T = any  这里的T可以是any  在调用的时候就不用传入泛型 直接使默认值any
  get<T = any>(config: WyRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'GET' })
  }
  post<T = any>(config: WyRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'POST' })
  }
  delete<T = any>(config: WyRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'DELETE' })
  }
  patch<T = any>(config: WyRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'PATCH' })
  }
}

export default WyRequest
