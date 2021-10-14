<template>
  <div class="user">
    <page-search
      :formConfig="formConfig"
      @resetData="resetData"
      @searchData="searchData"
    />
    <page-contant
      ref="pageContantRef"
      :contantConfig="contantConfig"
      pageName="users"
      @newBtnClick="handleNewDate"
      @editBtnClick="handleEditDate"
    ></page-contant>

    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
      pageName="users"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import PageSearch from '@/components/page-search'
import PageContant from '@/components/page-contant'
import PageModal from '@/components/page-modal'

import { formConfig } from './config/search.config'
import { contantConfig } from './config/contant.config'
import { modalConfig } from './config/module.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/ues-page-modal'
import { useStore } from '@/store/index'
export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContant,
    PageModal
  },
  setup() {
    const [pageContantRef, resetData, searchData] = usePageSearch()
    // 动态添加inputItme
    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === 'password'
      })
      passwordItem!.isHidden = false
    }
    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find((item) => {
        return item.field === 'password'
      })
      passwordItem!.isHidden = true
    }
    const [pageModalRef, defaultInfo, handleNewDate, handleEditDate] =
      usePageModal(newCallback, editCallback)
    // 下面部分逻辑可能在别的页面也使用 抽成一个hooks
    // const pageModalRef = ref<InstanceType<typeof PageModal>>()
    // const defaultInfo = ref({})
    // const handleNewDate = () => {
    //   if (pageModalRef.value) pageModalRef.value.dialogVisible = true
    // }
    // const handleEditDate = (item: any) => {
    //   defaultInfo.value = { ...item }
    //   if (pageModalRef.value) pageModalRef.value.dialogVisible = true
    // }

    // 动态添加dload里面的部门列表 和角的列表内容
    const store = useStore()
    // 这里把本来普通的modalConfig 包裹一个computed  这样在我们修改modalConfig里面的数据  修改后 页面会自动重新绑定数据
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => {
        return item.field === 'departmentId'
      })
      departmentItem!.options = store.state.allDepartments.map((item) => {
        return {
          label: item.name,
          value: item.id
        }
      })

      const RoleItem = modalConfig.formItems.find((item) => {
        return item.field === 'roleId'
      })
      RoleItem!.options = store.state.allRules.map((item) => {
        return {
          label: item.name,
          value: item.id
        }
      })
      return modalConfig
    })
    return {
      formConfig,
      contantConfig,
      resetData,
      searchData,
      pageContantRef,
      modalConfigRef,
      handleNewDate,
      handleEditDate,
      pageModalRef,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
