import { Module } from 'vuex'
import { systemStateType } from './types'
import { IRootState } from '../../types'
import {
  deletePageData,
  getSystemPageDate,
  createNewDate,
  editPageDate
} from '@/network/main/system'
const systemModule: Module<systemStateType, IRootState> = {
  namespaced: true,
  state() {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
    }
  },
  mutations: {
    changeUsersList(state, payload) {
      state.usersList = payload
    },
    changeUsersCount(state, payload) {
      state.usersCount = payload
    },
    changeRoleList(state, payload) {
      state.roleList = payload
    },
    changeRoleCount(state, payload) {
      state.roleCount = payload
    },
    changeGoodsList(state, payload) {
      state.goodsList = payload
    },
    changeGoodsCount(state, payload) {
      state.goodsCount = payload
    },
    changeMenuList(state, payload) {
      state.menuList = payload
    },
    changeMenuCount(state, payload) {
      state.menuCount = payload
    }
  },
  actions: {
    async getSystemPage({ commit }, payload) {
      const pageName = payload.pageName
      const pageurl = `${pageName}/list`
      const pageResult = await getSystemPageDate(pageurl, payload.queryInfo)
      const { list, totalCount } = pageResult.data

      commit(
        `change${
          pageName.charAt(0).toLocaleUpperCase() + pageName.slice(1)
        }List`,
        list
      )
      commit(
        `change${
          pageName.charAt(0).toLocaleUpperCase() + pageName.slice(1)
        }Count`,
        totalCount
      )
    },
    async deletePageDataAction({ dispatch }, payload) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await deletePageData(pageUrl)
      dispatch('getSystemPage', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async createnewDate({ dispatch }, payload) {
      const { pageName, newDate } = payload
      const pageUrl = `/${pageName}`
      const res = await createNewDate(pageUrl, newDate)
      console.log(res)

      dispatch('getSystemPage', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    },
    async editNewDate({ dispatch }, payload) {
      const { pageName, editDate, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await editPageDate(pageUrl, editDate)

      dispatch('getSystemPage', {
        pageName,
        queryInfo: {
          offset: 0,
          size: 10
        }
      })
    }
  }
}
export default systemModule
