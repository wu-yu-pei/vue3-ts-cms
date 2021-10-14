import { IForm } from '../../../../../base-ui/form/types/index'
export const formConfig: IForm = {
  formItems: [
    {
      field: 'name',
      label: '角色名',
      placeholder: '输入角色名进行查找',
      type: 'text'
    },
    {
      field: 'intro',
      label: '权限介绍',
      placeholder: '输入权限介绍进行查找',
      type: 'text'
    },
    {
      field: 'time',
      label: '时间',
      placeholder: '输入时间范围',
      type: 'datepicker',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  labelWidth: '100px',
  itemStyle: {
    padding: '10px 60px'
  }
}
