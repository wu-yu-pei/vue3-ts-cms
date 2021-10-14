"use strict";
exports.__esModule = true;
var vue_router_1 = require("vue-router");
var cache_1 = require("../utils/cache");
var mapmenus_1 = require("@/utils/mapmenus");
var routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: function () { return require('../views/Login'); }
    },
    {
        path: '/main',
        name: 'main',
        // 默认进入这个里面
        component: function () { return require('../views/main'); },
        redirect: '/main/analysis/overview'
    }
];
var router = vue_router_1.createRouter({
    routes: routes,
    history: vue_router_1.createWebHashHistory()
});
router.beforeEach(function (to) {
    mapmenus_1.mapMenusToRoutes(cache_1["default"].get('userMenus').data).forEach(function (route) {
        return router.addRoute('main', route);
    });
    var token = cache_1["default"].get('token');
    if (to.path !== '/login') {
        if (!token) {
            return '/login';
        }
    }
});
exports["default"] = router;
