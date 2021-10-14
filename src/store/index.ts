import { createStore, Store, useStore as vuexStore } from 'vuex'
import { IRootState, IStoreType } from './types'

import Login from './login/login'
import system from './main/system/system'
import dashboard from './main/dashboard/dashboard'

import { getSystemPageDate } from '@/network/main/system/index'

const store = createStore<IRootState>({
  state() {
    return {
      name: '哈哈哈',
      age: '23',
      allDepartments: [],
      allRules: []
    }
  },
  getters: {},
  mutations: {
    changeDepartments(state, payload) {
      state.allDepartments = payload
    },
    changeRules(state, payload) {
      state.allRules = payload
    }
  },
  actions: {
    async getInitialDateAction({ commit }) {
      const deparementResult = await getSystemPageDate('/department/list', {
        offset: 0,
        size: 1000
      })
      const { list: departmentList } = deparementResult.data
      const ruleResult = await getSystemPageDate('/role/list', {
        offset: 0,
        size: 1000
      })
      const { list: ruleList } = ruleResult.data
      commit('changeDepartments', departmentList)
      commit('changeRules', ruleList)
    }
  },
  modules: {
    Login,
    system,
    dashboard
  }
})
// 从localStorage中把数据重新加载到vueX里面
export function setupStoreState() {
  store.dispatch('Login/loadLocalLogin')
}

export function useStore(): Store<IStoreType> {
  return vuexStore()
}

export default store
