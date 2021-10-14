<template>
  <div class="page-contant">
    <wy-tabel
      :listDate="listDate"
      :listCount="listCount"
      v-bind="contantConfig"
      v-model:page="pageInfo"
      :childrenProps="contantConfig.childrenProps"
    >
      <template #headhandler>
        <div v-if="isadd">
          <el-button
            type="primary"
            size="medium"
            v-if="isCreate"
            @click="addUser"
            >{{ add }}</el-button
          >
        </div>
      </template>
      <template #status="scope">
        <el-button
          size="small"
          plain
          :type="scope.row.enable === 1 ? 'primary' : 'danger'"
          >{{ scope.row.enable === 1 ? '启用' : '禁用' }}</el-button
        >
      </template>
      <template #createAt="scope">
        <span>{{ $filters.formatTime(scope.row.createAt) }}</span>
      </template>
      <template #updateAt="scope">
        <span>{{ $filters.formatTime(scope.row.updateAt) }}</span>
      </template>
      <template #handler="scope">
        <div class="hadnler">
          <el-button
            icon="el-icon-delete"
            type="text"
            v-if="isDelete"
            @click="handleRemove(scope.row)"
            >删除</el-button
          >
          <el-button
            icon="el-icon-edit"
            type="text"
            v-if="isUpdate"
            @click="handelEdit(scope.row)"
            >编辑</el-button
          >
        </div>
      </template>
      <!--在pageContant中动态添加剩余插条 -->
      <template
        v-for="item in otherPropSlot"
        :key="item.prop"
        #[item.slotName]="scope"
      >
        <slot v-if="item.slotName" :name="item.slotName" :row="scope.row">
        </slot>
      </template>
    </wy-tabel>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import WyTabel from '../../../base-ui/tabel/index'
import { usePermissions } from '@/hooks/use-permissions'
import { useStore } from '@/store'
export default defineComponent({
  props: {
    contantConfig: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    add: {
      type: String,
      default: '新增用户'
    },
    isadd: {
      type: Boolean,
      default: true
    }
  },
  components: { WyTabel },
  emits: ['newBtnClick', 'editBtnClick'],
  setup(props, { emit }) {
    const store = useStore()
    // 1.权限管理
    const isCreate = usePermissions(props.pageName, 'create')
    const isUpdate = usePermissions(props.pageName, 'update')
    const isDelete = usePermissions(props.pageName, 'delete')
    const isQuery = usePermissions(props.pageName, 'query')

    // 2.双向绑定pageInfo
    const pageInfo = ref({ currentPage: 1, pageSize: 10 })

    watch(pageInfo, () => getPageData())
    // 3.数据部分
    function getPageData(queryInfo: any = {}) {
      if (!isQuery) return
      store.dispatch('system/getSystemPage', {
        pageName: props.pageName,
        queryInfo: {
          offset: (pageInfo.value.currentPage - 1) * pageInfo.value.pageSize,
          size: pageInfo.value.pageSize,
          ...queryInfo
        }
      })
    }

    getPageData()

    const listDate = computed(
      () => (store.state.system as any)[`${props.pageName}List`]
    )

    const listCount = computed(
      () => (store.state.system as any)[`${props.pageName}Count`]
    )

    const otherPropSlot = props.contantConfig?.propList.filter((item: any) => {
      if (item.slotName === 'status') return false
      if (item.slotName === 'createAt') return false
      if (item.slotName === 'updataAt') return false
      if (item.slotName === 'handler') return false
      return true
    })

    //4. 新建 删除 编辑
    const handleRemove = (item: any) => {
      store.dispatch('system/deletePageDataAction', {
        pageName: props.pageName,
        id: item.id
      })
    }

    const handelEdit = (item: any) => {
      emit('editBtnClick', item)
    }

    const addUser = () => {
      emit('newBtnClick')
    }
    return {
      listDate,
      listCount,
      getPageData,
      pageInfo,
      otherPropSlot,
      isCreate,
      isUpdate,
      isDelete,
      handleRemove,
      handelEdit,
      addUser
    }
  }
})
</script>

<style scoped>
.page-contant {
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  border-top: 30px solid #eff0f5;
  padding-bottom: 20px;
}
.el-table {
  margin: 30px auto 0;
}
</style>
