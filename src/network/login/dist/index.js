"use strict";
exports.__esModule = true;
exports.requestUserMenuById = exports.requestUserInfoById = exports.accountLoginRequest = void 0;
var index_1 = require("../index");
var LoginApi;
(function (LoginApi) {
    LoginApi["AccountLogin"] = "/login";
    LoginApi["LoginUersInfo"] = "/users/";
    LoginApi["Usermenu"] = "/role/";
})(LoginApi || (LoginApi = {}));
function accountLoginRequest(accoutn) {
    return index_1.Wyrequest.post({
        url: LoginApi.AccountLogin,
        data: accoutn,
        showLoading: false
    });
}
exports.accountLoginRequest = accountLoginRequest;
function requestUserInfoById(id) {
    return index_1.Wyrequest.get({
        url: LoginApi.LoginUersInfo + id,
        data: id,
        showLoading: false
    });
}
exports.requestUserInfoById = requestUserInfoById;
function requestUserMenuById(id) {
    return index_1.Wyrequest.get({
        url: LoginApi.Usermenu + id + '/menu'
    });
}
exports.requestUserMenuById = requestUserMenuById;
