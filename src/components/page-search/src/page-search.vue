<template>
  <div class="page-search">
    <Hyform v-bind="formConfig" v-model="formeData">
      <template #header>
        <h2 class="header">高级检索</h2>
      </template>
      <template #fotter>
        <div class="fotter">
          <el-button
            type="primary"
            icon="el-icon-refresh"
            @click="handelResetClick"
            >重置</el-button
          >
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="handelSearchClick"
            >搜索</el-button
          >
        </div>
      </template>
    </Hyform>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Hyform from '@/base-ui/form'
export default defineComponent({
  components: {
    Hyform
  },
  props: {
    formConfig: {
      type: Object,
      required: true
    }
  },
  emits: ['resetData', 'searchData'],
  setup(props, { emit }) {
    // 1.双向绑定数据
    const formItems = props.formConfig?.formItems ?? []
    const formeDataOring: any = {}
    for (const item of formItems) {
      formeDataOring[`${item.field}`] = ''
    }
    const formeData = ref(formeDataOring)

    const handelResetClick = () => {
      for (const key in formeDataOring) {
        formeData.value[`${key}`] = formeDataOring[key]
      }
      emit('resetData')
    }

    const handelSearchClick = () => {
      emit('searchData', formeData.value)
    }
    return {
      formeData,
      handelResetClick,
      handelSearchClick
    }
  }
})
</script>

<style scoped>
.header {
  text-align: center;
}

.fotter {
  text-align: right;
  padding: 0 30px 30px 0;
}
</style>
