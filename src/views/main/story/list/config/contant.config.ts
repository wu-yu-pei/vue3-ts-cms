export const contantConfig = {
  propList: [
    { prop: 'name', label: '用户名称', minWidth: '100' },
    { prop: 'text', label: '说说', minWidth: '100' },
    { prop: 'url', label: '菜单url', minWidth: '100' },
    { prop: 'icon', label: '菜单icon', minWidth: '100' },
    { prop: 'premission', label: '按钮权限', minWidth: '100' },
    {
      prop: 'createAt',
      label: '创建时间',
      minWidth: '150',
      slotName: 'createAt'
    },
    {
      prop: 'updateAt',
      label: '更新时间',
      minWidth: '150',
      slotName: 'updateAt'
    }
  ],
  title: '故事列表',
  showSelectColum: false,
  showIndexColum: false,
  isShowPageaction: true,
  childrenProps: {
    rowKey: 'id',
    treeProp: {
      children: 'children'
    }
  }
}
