import { Wyrequest } from '../index'
import { IAccount, ILoginResult } from './type'
import { IDataType } from '@/network/type'
enum LoginApi {
  AccountLogin = '/login',
  LoginUersInfo = '/users/',
  Usermenu = '/role/'
}

export function accountLoginRequest(accoutn: IAccount) {
  return Wyrequest.post<IDataType<ILoginResult>>({
    url: LoginApi.AccountLogin,
    data: accoutn,
    showLoading: false
  })
}

export function requestUserInfoById(id: number) {
  return Wyrequest.get<IDataType>({
    url: LoginApi.LoginUersInfo + id,
    data: id,
    showLoading: false
  })
}

export function requestUserMenuById(id: number) {
  return Wyrequest.get<IDataType>({
    url: LoginApi.Usermenu + id + '/menu'
  })
}
