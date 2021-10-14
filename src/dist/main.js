"use strict";
exports.__esModule = true;
var vue_1 = require("vue");
var App_vue_1 = require("./App.vue");
var index_1 = require("./route/index");
var index_2 = require("./store/index");
var global_1 = require("./global");
require("normalize.css");
require("./assets/less/index.less");
var index_3 = require("./store/index");
var app = vue_1.createApp(App_vue_1["default"]);
// 注册element组件
//1. globalRegister(app)
//2. use 中间件的方式 会自动传入app
app.use(global_1.globalRegister);
app.use(index_2["default"]);
index_3.setupStoreState();
app.use(index_1["default"]);
app.mount('#app');
