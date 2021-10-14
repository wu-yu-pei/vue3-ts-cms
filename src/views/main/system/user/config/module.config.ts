import { IForm } from '../../../../../base-ui/form/types/index'
export const modalConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '用户名',
      placeholder: '输入用户名进行查找',
      type: 'text'
    },
    {
      field: 'realname',
      label: '真实姓名',
      placeholder: '输入真实姓名',
      type: 'text'
    },
    {
      field: 'password',
      label: '密码',
      placeholder: '请输入密码',
      type: 'password',
      isHidden: true
    },
    {
      field: 'cellphone',
      label: '电话号码',
      placeholder: '输入电话号码进行查找',
      type: 'text'
    },
    {
      field: 'roleId',
      label: '选择角色',
      placeholder: '请选择角色',
      type: 'select',
      options: []
    },
    {
      field: 'departmentId',
      label: '选择部门',
      placeholder: '请选择部门',
      type: 'select',
      options: []
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
