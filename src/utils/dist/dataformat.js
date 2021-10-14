"use strict";
exports.__esModule = true;
exports.formatUtcString = void 0;
var dayjs_1 = require("dayjs");
var utc_1 = require("dayjs/plugin/utc");
dayjs_1["default"].extend(utc_1["default"]);
var DATE_TIME_FORMAT = 'YYYY-MM-DD HH:mm:ss';
function formatUtcString(utcString, format) {
    if (format === void 0) { format = DATE_TIME_FORMAT; }
    return dayjs_1["default"].utc(utcString).format(format);
}
exports.formatUtcString = formatUtcString;
