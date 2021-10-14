"use strict";
exports.__esModule = true;
exports.globalRegister = void 0;
var register_element_1 = require("./register-element");
var register_propstise_1 = require("./register-propstise");
function globalRegister(app) {
    // registerElement(app)
    app.use(register_element_1["default"]);
    app.use(register_propstise_1["default"]);
}
exports.globalRegister = globalRegister;
