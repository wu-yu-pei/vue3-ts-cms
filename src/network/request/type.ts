import { AxiosRequestConfig, AxiosResponse } from 'axios'

// 定义自己的拦截器接口
export interface WyRequestInterceptors<T = AxiosResponse> {
  requestInterceptors?: (config: AxiosRequestConfig) => AxiosRequestConfig
  requestInterceptorsCatch?: (error: any) => any
  respoonseInterceptors?: (config: T) => T
  respoonseInterceptorsCatch?: (error: any) => any
}

// 扩展AxiosRequest
export interface WyRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WyRequestInterceptors<T>
  showLoading?: boolean
}
