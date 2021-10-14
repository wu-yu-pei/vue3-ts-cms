"use strict";
exports.__esModule = true;
exports.getSystemPageDate = void 0;
var index_1 = require("../../index");
function getSystemPageDate(url, queryInfo) {
    return index_1.Wyrequest.post({
        url: url,
        data: queryInfo
    });
}
exports.getSystemPageDate = getSystemPageDate;
