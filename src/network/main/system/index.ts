import { Wyrequest } from '../../index'
import { IDataType } from '@/network/type'
import { ISystemRes } from './types'
export function getSystemPageDate(url: string, queryInfo: any) {
  return Wyrequest.post<IDataType<ISystemRes>>({
    url: url,
    data: queryInfo
  })
}
export function deletePageData(url: string) {
  return Wyrequest.delete<IDataType>({
    url,
    showLoading: true
  })
}

export function createNewDate(url: string, newDate: any) {
  return Wyrequest.post<IDataType>({
    url,
    data: newDate,
    showLoading: true
  })
}

export function editPageDate(url: string, editDate: any) {
  return Wyrequest.patch<IDataType>({
    url,
    data: editDate
  })
}
