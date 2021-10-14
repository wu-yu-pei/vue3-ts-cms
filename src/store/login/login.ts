// 导入必要模块
import { Module } from 'vuex'
// 导入根state的类型和自身state的类型
import { IRootState } from '../types'
import { LoginState } from './type'
import {
  accountLoginRequest,
  requestUserInfoById,
  requestUserMenuById
} from '../../network/login/index'
import LocalCache from '../../utils/cache'
import router from '@/route'
import { mapMenusToRoutes, mapMenuToPermissions } from '../../utils/mapmenus'
const LoginModule: Module<LoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      token: '',
      userinfo: '',
      usermenus: [],
      permissions: []
    }
  },
  getters: {},
  mutations: {
    changeToken(state, payload) {
      state.token = payload
    },
    changeUserInfo(state, payload) {
      state.userinfo = payload
    },
    changeUserMenus(state, payload) {
      state.usermenus = payload

      // 动态载入路由
      const routes = mapMenusToRoutes(payload)
      routes.forEach((route) => router.addRoute('main', route))

      // 动态获取权限
      const permissions = mapMenuToPermissions(payload)
      state.permissions = permissions
    }
  },
  actions: {
    //登录请求
    async loginAccountAction({ commit, dispatch }, payload) {
      const loginResult = await accountLoginRequest(payload)
      // console.log('用户登录信息', loginResult)
      // 实现登录逻辑
      const { id, token } = loginResult.data
      commit('changeToken', token)
      LocalCache.set('token', token)
      // 请求用户信息
      const UserInfoResult = await requestUserInfoById(id)
      const userinfo = UserInfoResult.data
      commit('changeUserInfo', userinfo)
      LocalCache.set('userinfo', userinfo)
      // console.log('用户详情信息', userinfo)
      // 请求用户菜单
      const menu = await requestUserMenuById(id)
      commit('changeUserMenus', menu.data)
      LocalCache.set('userMenus', menu.data)
      // console.log(menu.data)

      dispatch('getInitialDateAction', null, { root: true })
      // 跳转路由
      router.push('/main/analysis/overview')
    },
    loadLocalLogin({ commit, dispatch }) {
      const token = LocalCache.get('token')

      const userInfo = LocalCache.get('userinfo')

      const userMenus = LocalCache.get('userMenus')

      dispatch('getInitialDateAction', null, { root: true })
      if (token) {
        commit('changeToken', token)
        commit('changeUserInfo', userInfo)
        commit('changeUserMenus', userMenus)
      }
    }
  }
}

export default LoginModule
