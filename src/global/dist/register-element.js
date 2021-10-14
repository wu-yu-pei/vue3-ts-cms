"use strict";
exports.__esModule = true;
require("element-plus/lib/theme-chalk/base.css");
var element_plus_1 = require("element-plus");
var elements = [
    element_plus_1.ElButton,
    element_plus_1.ElAside,
    element_plus_1.ElAlert,
    element_plus_1.ElForm,
    element_plus_1.ElFormItem,
    element_plus_1.ElInput,
    element_plus_1.ElRadio,
    element_plus_1.ElTabs,
    element_plus_1.ElTabPane,
    element_plus_1.ElCheckbox,
    element_plus_1.ElLink,
    element_plus_1.ElContainer,
    element_plus_1.ElHeader,
    element_plus_1.ElMain,
    element_plus_1.ElFooter,
    element_plus_1.ElSubmenu,
    element_plus_1.ElRadioButton,
    element_plus_1.ElRadioGroup,
    element_plus_1.ElMenu,
    element_plus_1.ElMenuItemGroup,
    element_plus_1.ElMenuItem,
    element_plus_1.ElDropdown,
    element_plus_1.ElDropdownItem,
    element_plus_1.ElDropdownMenu,
    element_plus_1.ElAvatar,
    element_plus_1.ElRow,
    element_plus_1.ElCol,
    element_plus_1.ElSelect,
    element_plus_1.ElOption,
    element_plus_1.ElDatePicker,
    element_plus_1.ElBreadcrumb,
    element_plus_1.ElBreadcrumbItem,
    element_plus_1.ElTable,
    element_plus_1.ElTableColumn
];
function default_1(app) {
    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
        var component = elements_1[_i];
        app.component(component.name, component);
    }
}
exports["default"] = default_1;
