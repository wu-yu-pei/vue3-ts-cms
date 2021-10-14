"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var index_1 = require("../../network/login/index");
var cache_1 = require("../../utils/cache");
var route_1 = require("@/route");
var mapmenus_1 = require("../../utils/mapmenus");
var LoginModule = {
    namespaced: true,
    state: function () {
        return {
            token: '',
            userinfo: '',
            usermenus: []
        };
    },
    getters: {},
    mutations: {
        changeToken: function (state, payload) {
            state.token = payload;
        },
        changeUserInfo: function (state, payload) {
            state.userinfo = payload;
        },
        changeUserMenus: function (state, payload) {
            state.usermenus = payload.data;
        }
    },
    actions: {
        //登录请求
        loginAccountAction: function (_a, payload) {
            var commit = _a.commit;
            return __awaiter(this, void 0, void 0, function () {
                var loginResult, _b, id, token, UserInfoResult, userinfo, menu, routes;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0: return [4 /*yield*/, index_1.accountLoginRequest(payload)];
                        case 1:
                            loginResult = _c.sent();
                            console.log('用户登录信息', loginResult);
                            _b = loginResult.data, id = _b.id, token = _b.token;
                            commit('changeToken', token);
                            cache_1["default"].set('token', token);
                            return [4 /*yield*/, index_1.requestUserInfoById(id)];
                        case 2:
                            UserInfoResult = _c.sent();
                            userinfo = UserInfoResult.data;
                            commit('changeUserInfo', userinfo);
                            cache_1["default"].set('userinfo', userinfo);
                            console.log('用户详情信息', userinfo);
                            return [4 /*yield*/, index_1.requestUserMenuById(id)];
                        case 3:
                            menu = _c.sent();
                            console.log('用户菜单', menu);
                            commit('changeUserMenus', menu);
                            cache_1["default"].set('userMenus', menu);
                            routes = mapmenus_1.mapMenusToRoutes(menu.data);
                            routes.forEach(function (route) { return route_1["default"].addRoute('main', route); });
                            // 跳转路由
                            route_1["default"].push('/main');
                            return [2 /*return*/];
                    }
                });
            });
        },
        loadLocalLogin: function (_a) {
            var commit = _a.commit;
            var token = cache_1["default"].get('token');
            var userInfo = cache_1["default"].get('userinfo');
            var userMenus = cache_1["default"].get('userMenus');
            if (token) {
                commit('changeToken', token);
                commit('changeUserInfo', userInfo);
                commit('changeUserMenus', userMenus);
                // 动态载入路由
                var routes = mapmenus_1.mapMenusToRoutes(userMenus.data);
                routes.forEach(function (route) { return route_1["default"].addRoute('main', route); });
            }
        }
    }
};
exports["default"] = LoginModule;
