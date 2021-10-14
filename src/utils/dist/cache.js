"use strict";
exports.__esModule = true;
var LocalCache = /** @class */ (function () {
    function LocalCache() {
    }
    LocalCache.prototype.set = function (key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    };
    LocalCache.prototype.get = function (key) {
        var value = window.localStorage.getItem(key);
        if (value) {
            return JSON.parse(value);
        }
    };
    LocalCache.prototype.remove = function (key) {
        window.localStorage.removeItem(key);
    };
    LocalCache.prototype.clear = function () {
        window.localStorage.clear();
    };
    return LocalCache;
}());
exports["default"] = new LocalCache();
