import { Wyrequest } from '@/network/index'

enum DastboardApi {
  categoryGoodsCount = '/goods/category/count',
  categoryGoodsSale = '/goods/category/sale',
  categoryGoodsFavor = '/goods/category/favor',
  addressGoodsSale = '/goods/address/sale',
  goodsamountlist = '/goods/amount/list'
}

export function getCategoryGoodsCount() {
  return Wyrequest.get({
    url: DastboardApi.categoryGoodsCount
  })
}
export function getCategoryGoodsSale() {
  return Wyrequest.get({
    url: DastboardApi.categoryGoodsSale
  })
}

export function getCategoryGoodsFavor() {
  return Wyrequest.get({
    url: DastboardApi.categoryGoodsFavor
  })
}

export function getAddressGoodsSale() {
  return Wyrequest.get({
    url: DastboardApi.addressGoodsSale
  })
}

export function getGoodsAmountList() {
  return Wyrequest.get({
    url: DastboardApi.goodsamountlist
  })
}
