"use strict";
exports.__esModule = true;
exports.rules = void 0;
// input验证规则
exports.rules = {
    phone: [
        {
            required: true,
            message: '手机号必传',
            trigger: 'blur'
        },
        {
            pattern: /^[0-9]{11}$/,
            message: '手机号格式不正确'
        }
    ],
    verification: [
        {
            required: true,
            message: '请输入验证码',
            trigger: 'blur'
        },
        {
            pattern: /^[a-z0-9]{4}$/,
            message: '验证码格式错误'
        }
    ]
};
