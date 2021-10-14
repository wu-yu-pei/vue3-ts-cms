"use strict";
exports.__esModule = true;
exports.Wyrequest = void 0;
var request_1 = require("./request");
var config_1 = require("./request/config");
var cache_1 = require("../utils/cache");
var Wyrequest = new request_1["default"]({
    baseURL: config_1.BASE_URL,
    timeout: config_1.TIME_OUT,
    interceptors: {
        requestInterceptors: function (config) {
            // 拦截此请求 使其携带tocken
            var token = cache_1["default"].get('token');
            if (token) {
                config.headers.Authorization = "Bearer " + token;
            }
            // console.log('请求拦截成功')
            return config;
        },
        requestInterceptorsCatch: function (err) {
            // console.log('请求拦截失败')
            return err;
        },
        respoonseInterceptors: function (res) {
            // console.log('响应拦截成功')
            return res;
        },
        respoonseInterceptorsCatch: function (err) {
            // console.log('响应拦截失败')
            return err;
        }
    }
});
exports.Wyrequest = Wyrequest;
