<template>
  <div>
    <el-dialog
      v-model="dialogVisible"
      title="新增用户"
      width="30%"
      destroy-on-close
      center
    >
      <hyform v-bind="modalConfig" v-model="formDate"></hyform>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="centerDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleComfirmClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import Hyform from '@/base-ui/form'
import { useStore } from '@/store/index'
export default defineComponent({
  props: {
    modalConfig: {
      type: Object,
      required: true
    },
    defaultInfo: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      requied: true
    }
  },
  components: {
    Hyform
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formDate = ref<any>({})
    const store = useStore()
    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (const item of props.modalConfig.formItems) {
          formDate.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )
    // 点击确定处理逻辑
    const handleComfirmClick = () => {
      dialogVisible.value = false
      // 判断是新建还是编辑
      if (Object.keys(props.defaultInfo).length) {
        // 编辑
        store.dispatch('system/editNewDate', {
          pageName: props.pageName,
          editDate: { ...formDate.value },
          id: props.defaultInfo.id
        })
      } else {
        // 新建
        store.dispatch('system/createnewDate', {
          pageName: props.pageName,
          newDate: { ...formDate.value }
        })
      }
    }
    return {
      dialogVisible,
      formDate,
      handleComfirmClick
    }
  }
})
</script>

<style scoped></style>
