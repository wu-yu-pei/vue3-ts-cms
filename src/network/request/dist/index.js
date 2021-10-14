"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var axios_1 = require("axios");
var element_plus_1 = require("element-plus");
var DEFAULT_LOADING = true;
var WyRequest = /** @class */ (function () {
    function WyRequest(config) {
        var _this = this;
        var _a, _b, _c, _d, _e;
        this.instance = axios_1["default"].create(config);
        this.interceptors = config.interceptors;
        this.showLoading = (_a = config.showLoading) !== null && _a !== void 0 ? _a : DEFAULT_LOADING;
        // 拦截器的封装(某个实例传了才有,不传就没有)
        this.instance.interceptors.request.use((_b = config.interceptors) === null || _b === void 0 ? void 0 : _b.requestInterceptors, (_c = config.interceptors) === null || _c === void 0 ? void 0 : _c.requestInterceptorsCatch);
        this.instance.interceptors.response.use((_d = config.interceptors) === null || _d === void 0 ? void 0 : _d.respoonseInterceptors, (_e = config.interceptors) === null || _e === void 0 ? void 0 : _e.respoonseInterceptorsCatch);
        // 所有实例都会有的拦截器,不穿也会有
        this.instance.interceptors.request.use(function (config) {
            // loading加载动画
            if (_this.showLoading) {
                _this.loading = element_plus_1.ElLoading.service({
                    lock: true,
                    background: 'rgba(0,0,0,0.5)'
                });
            }
            // console.log('我是所有实例都会有的请求成功拦截器')
            return config;
        }, function (err) {
            // console.log('我是所有实例都会有的请求失败拦截器')
            return err;
        });
        this.instance.interceptors.response.use(function (res) {
            var _a;
            // 响应成功关闭loading
            (_a = _this.loading) === null || _a === void 0 ? void 0 : _a.close();
            // console.log('我是所有实例都会有的响应成功拦截器')
            return res.data;
        }, function (err) {
            // 响应失败关闭loading
            // console.log('我是所有实例都会有的响应失败拦截器')
            return err;
        });
    }
    WyRequest.prototype.request = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var _a;
            if ((_a = config.interceptors) === null || _a === void 0 ? void 0 : _a.requestInterceptors) {
                config = config.interceptors.requestInterceptors(config);
            }
            if (config.showLoading === false) {
                _this.showLoading = false;
            }
            _this.instance
                .request(config)
                .then(function (res) {
                var _a;
                if ((_a = config.interceptors) === null || _a === void 0 ? void 0 : _a.respoonseInterceptors) {
                    res = config.interceptors.respoonseInterceptors(res);
                }
                resolve(res);
                // 最后需要把这个值设为true 因为下一此的loading可能是true
                _this.showLoading = DEFAULT_LOADING;
            })["catch"](function (err) {
                // 最后需要把这个值设为true 因为下一此的loading可能是true
                _this.showLoading = DEFAULT_LOADING;
                reject(err);
                return err;
            });
        });
    };
    // T = any  这里的T可以是any  在调用的时候就不用传入泛型 直接使默认值any
    WyRequest.prototype.get = function (config) {
        return this.request(__assign(__assign({}, config), { method: 'GET' }));
    };
    WyRequest.prototype.post = function (config) {
        return this.request(__assign(__assign({}, config), { method: 'POST' }));
    };
    WyRequest.prototype["delete"] = function (config) {
        return this.request(__assign(__assign({}, config), { method: 'DELETE' }));
    };
    WyRequest.prototype.patch = function (config) {
        return this.request(__assign(__assign({}, config), { method: 'PATCH' }));
    };
    return WyRequest;
}());
exports["default"] = WyRequest;
