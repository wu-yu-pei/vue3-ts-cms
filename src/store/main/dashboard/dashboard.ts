import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { IDashboardState } from './types'

import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale,
  getGoodsAmountList
} from '@/network/main/analysis/index'
const dashboardModule: Module<IDashboardState, IRootState> = {
  namespaced: true,
  state() {
    return {
      categoryGoodsCount: [],
      categoryGoodsSale: [],
      categoryGoodsFavor: [],
      addressGoodsSale: [],
      goodsAmountList: []
    }
  },
  mutations: {
    changeAmountList(state, list) {
      state.goodsAmountList = list
    },
    changeCategoryCount(state, list) {
      state.categoryGoodsCount = list
    },
    changeCategorySale(state, list) {
      state.categoryGoodsSale = list
    },
    changeCategoryFavor(state, list) {
      state.categoryGoodsFavor = list
    },
    changeAddressSale(state, list) {
      state.addressGoodsSale = list
    }
  },
  actions: {
    async getDashboardDataAction({ commit }) {
      const goodsAmountList = await getGoodsAmountList()
      commit('changeAmountList', goodsAmountList.data)
      const GoodsCountres = await getCategoryGoodsCount()
      commit('changeCategoryCount', GoodsCountres.data)
      const GoodsSaleres = await getCategoryGoodsSale()
      commit('changeCategorySale', GoodsSaleres.data)
      const GoodsCountFavor = await getCategoryGoodsFavor()
      commit('changeCategoryFavor', GoodsCountFavor.data)
      const AddressSaleres = await getAddressGoodsSale()
      commit('changeAddressSale', AddressSaleres.data)
    }
  }
}
export default dashboardModule
