<template>
  <div class="role">
    <page-search
      :formConfig="formConfig"
      @resetData="resetData"
      @searchData="searchData"
    ></page-search>
    <page-contant
      :contantConfig="contantConfig"
      pageName="role"
      ref="pageContantRef"
      add="新增角色"
      @newBtnClick="handleNewDate"
      @editBtnClick="handleEditDate"
    ></page-contant>
    <page-modal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfig"
      pageName="role"
    ></page-modal>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import pageContant from '@/components/page-contant'
import PageSearch from '@/components/page-search'
import PageModal from '@/components/page-modal'

import { contantConfig } from './config/contant.config'
import { formConfig } from './config/search.config'
import { modalConfig } from './config/module.config'

import { usePageSearch } from '@/hooks/use-page-search'
import { usePageModal } from '@/hooks/ues-page-modal'

export default defineComponent({
  components: { pageContant, PageSearch, PageModal },
  name: 'role',
  setup() {
    const [pageContantRef, resetData, searchData] = usePageSearch()
    const newCallback = () => {
      console.log(1)
    }
    const editCallback = () => {
      console.log(1)
    }
    const [pageModalRef, defaultInfo, handleNewDate, handleEditDate] =
      usePageModal(newCallback, editCallback)
    return {
      contantConfig,
      formConfig,
      modalConfig,
      pageContantRef,
      resetData,
      searchData,
      pageModalRef,
      defaultInfo,
      handleNewDate,
      handleEditDate
    }
  }
})
</script>

<style scoped></style>
