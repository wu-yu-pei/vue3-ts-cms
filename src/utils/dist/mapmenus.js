"use strict";
exports.__esModule = true;
exports.mapBread = exports.mapMenuToCurrentMenu = exports.mapMenusToRoutes = void 0;
function mapMenusToRoutes(usermenus) {
    // 动态添加进去的路由
    var routes = [];
    // 文件里所有的路由
    var allRoutes = [];
    var RouteFile = require.context('../route/main', true, /\.ts/);
    RouteFile.keys().forEach(function (key) {
        var route = require('../route/main' + key.split('.')[1]);
        allRoutes.push(route["default"]);
    });
    setmenu(usermenus);
    function setmenu(usermenus) {
        var _loop_1 = function (item) {
            if (item.type === 2) {
                var usermenu = allRoutes.find(function (iteminfo) {
                    return iteminfo.path === item.url;
                });
                if (usermenu) {
                    routes.push(usermenu);
                }
            }
            else {
                setmenu(item.children);
            }
        };
        for (var _i = 0, usermenus_1 = usermenus; _i < usermenus_1.length; _i++) {
            var item = usermenus_1[_i];
            _loop_1(item);
        }
    }
    return routes;
}
exports.mapMenusToRoutes = mapMenusToRoutes;
function mapMenuToCurrentMenu(usermenus, currentMenu, bread) {
    for (var _i = 0, usermenus_2 = usermenus; _i < usermenus_2.length; _i++) {
        var menu = usermenus_2[_i];
        if (menu.type === 1) {
            var find = mapMenuToCurrentMenu(menu.children, currentMenu);
            if (find) {
                bread === null || bread === void 0 ? void 0 : bread.push({ name: menu.name, path: menu.url });
                bread === null || bread === void 0 ? void 0 : bread.push({ name: find.name, path: find.url });
                return find;
            }
        }
        else if (menu.type === 2 && menu.url === currentMenu) {
            return menu;
        }
    }
}
exports.mapMenuToCurrentMenu = mapMenuToCurrentMenu;
function mapBread(usermenus, currentMenu) {
    var breads = [];
    mapMenuToCurrentMenu(usermenus, currentMenu, breads);
    return breads;
}
exports.mapBread = mapBread;
