import { IForm } from '../../../../../base-ui/form/types/index'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'role',
      label: '角色名称',
      placeholder: '输入角色名称',
      type: 'text'
    },
    {
      field: 'realname',
      label: '角色描述',
      placeholder: '输入角色藐视',
      type: 'text'
    }
  ],
  labelWidth: '100px',
  itemStyle: {},
  colLayout: {
    xl: 24,
    lg: 24,
    md: 24,
    sm: 24,
    xs: 24
  }
}
