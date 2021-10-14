"use strict";
exports.__esModule = true;
exports.useStore = exports.setupStoreState = void 0;
var vuex_1 = require("vuex");
var login_1 = require("./login/login");
var system_1 = require("./main/system/system");
var store = vuex_1.createStore({
    state: function () {
        return {
            name: '哈哈哈',
            age: '23'
        };
    },
    getters: {},
    mutations: {},
    actions: {},
    modules: {
        Login: login_1["default"],
        system: system_1["default"]
    }
});
// 从localStorage中把数据重新加载到vueX里面
function setupStoreState() {
    store.dispatch('Login/loadLocalLogin');
}
exports.setupStoreState = setupStoreState;
function useStore() {
    return vuex_1.useStore();
}
exports.useStore = useStore;
exports["default"] = store;
