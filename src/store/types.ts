import { LoginState } from './login/type'
import { systemStateType } from './main/system/types'
import { IDashboardState } from './main/dashboard/types'

export interface IRootState {
  name: string
  age: string
  allDepartments: any[]
  allRules: any[]
}

export interface IRootWithModule {
  Login: LoginState
  system: systemStateType
  dashboard: IDashboardState
}

export type IStoreType = IRootState & IRootWithModule
