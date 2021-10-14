export const contantConfig = {
  propList: [
    { prop: 'name', label: '商品名称', minWidth: '100' },
    {
      prop: 'imgUrl',
      label: '预览',
      minWidth: '100',
      slotName: 'image'
    },
    {
      prop: 'oldPrice',
      label: '原价格',
      minWidth: '100',
      slotName: 'oldPrice'
    },
    {
      prop: 'newPrice',
      label: '现价格',
      minWidth: '100',
      slotName: 'newPrice'
    },
    { prop: 'status', label: '状态', minWidth: '100', slotName: 'status' },
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
  title: '商品列表',
  showSelectColum: true,
  showIndexColum: true
}
