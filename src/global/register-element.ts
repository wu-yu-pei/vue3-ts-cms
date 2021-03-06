import { App } from 'vue'

import 'element-plus/lib/theme-chalk/base.css'

import {
  ElButton,
  ElAside,
  ElAlert,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElSubmenu,
  ElRadioButton,
  ElRadioGroup,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElTable,
  ElPagination,
  ElConfigProvider,
  ElUpload,
  ElImage,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElTooltip,
  ElBadge,
  ElDialog
} from 'element-plus'

const elements = [
  ElButton,
  ElAside,
  ElAlert,
  ElForm,
  ElFormItem,
  ElInput,
  ElRadio,
  ElTabs,
  ElTabPane,
  ElCheckbox,
  ElLink,
  ElContainer,
  ElHeader,
  ElMain,
  ElFooter,
  ElSubmenu,
  ElRadioButton,
  ElRadioGroup,
  ElMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElDropdown,
  ElDropdownItem,
  ElDropdownMenu,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTable,
  ElTableColumn,
  ElPagination,
  ElConfigProvider,
  ElUpload,
  ElImage,
  ElCard,
  ElDescriptions,
  ElDescriptionsItem,
  ElTag,
  ElTooltip,
  ElBadge,
  ElDialog
]

export default function (app: App): void {
  for (const component of elements) {
    app.component(component.name, component)
  }
}
