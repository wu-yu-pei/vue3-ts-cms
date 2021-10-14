import { IForm } from '../../../../../base-ui/form/types/index'
export const formConfig: IForm = {
  formItems: [
    {
      field: 'id',
      label: 'id',
      placeholder: '输入id进行查找',
      type: 'text'
    },
    {
      field: 'name',
      label: '用户名',
      placeholder: '输入用户名进行查找',
      type: 'text'
    },
    {
      field: 'realname',
      label: '真名',
      placeholder: '输入真名进行查找',
      type: 'text'
    },
    {
      field: 'enable',
      label: '状态',
      placeholder: '输入状态进行查找',
      type: 'select',
      options: [
        {
          label: '启用',
          value: '1'
        },
        {
          label: '禁用',
          value: '0'
        }
      ]
    },
    {
      field: 'createAt',
      label: '时间',
      placeholder: '输入时间范围',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    },
    {
      field: 'cellphone',
      label: '电话号码',
      placeholder: '输入电话号码进行查找',
      type: 'text'
    }
  ],
  labelWidth: '100px',
  itemStyle: {
    padding: '10px 60px'
  }
}
