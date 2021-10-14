"use strict";
exports.__esModule = true;
function default_1(app) {
    app.config.globalProperties.$filters = {
        foo: function () {
            console.log('foo');
        },
        formatTime: function (time) {
            return '2020 20-20 20:20:20';
        }
    };
}
exports["default"] = default_1;
