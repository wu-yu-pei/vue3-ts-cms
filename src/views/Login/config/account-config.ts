// input验证规则
export const rules = {
  name: [
    {
      required: true,
      message: '用户名必传',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '用户名必须是5-10个字母或者数字'
    }
  ],
  password: [
    {
      required: true,
      message: '密码必传',
      trigger: 'blur'
    },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上数字或者字母'
    }
  ]
}
