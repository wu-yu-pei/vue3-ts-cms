type IFormType = 'text' | 'password' | 'select' | 'datepicker'
export interface IFormItem {
  field: string
  label: string
  rules?: any[]
  placeholder?: any
  type: IFormType
  options?: any[]
  otherOptions?: any
  isHidden?: boolean
}
export interface IForm {
  formItems: IFormItem[]
  labelWidth: string
  colLayout?: any
  itemStyle?: any
}
