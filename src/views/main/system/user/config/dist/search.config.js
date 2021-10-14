"use strict";
exports.__esModule = true;
exports.formConfig = void 0;
exports.formConfig = {
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
            field: 'spot',
            label: '运动',
            placeholder: '输入你喜欢的运动',
            type: 'select',
            options: [
                {
                    label: '篮球',
                    value: 'basketball'
                },
                {
                    label: '足球',
                    value: 'football'
                }
            ]
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
        },
        {
            field: 'password',
            label: '密码',
            placeholder: '输入密码进行查找',
            type: 'password'
        }
    ],
    labelWidth: '100px',
    itemStyle: {
        padding: '10px 60px'
    },
    colLayout: {
        span: 8
    }
};
