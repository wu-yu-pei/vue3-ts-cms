<template>
  <div>
    <div class="header">
      <slot name="header">
        <div class="title">
          <h2>{{ title }}</h2>
        </div>
        <div class="handler">
          <slot name="headhandler"></slot>
        </div>
      </slot>
    </div>
    <el-table
      :data="listDate"
      border
      style="width: 95%"
      @selection-change="handelSelectChange"
      v-bind="childrenProps"
    >
      <el-table-column
        type="selection"
        v-if="showSelectColum"
      ></el-table-column>
      <el-table-column
        v-if="showIndexColum"
        type="index"
        label="序号"
        width="80"
        align="center"
      ></el-table-column>
      <template v-for="propItem in propList" :key="propItem.name">
        <el-table-column
          align="center"
          v-bind="propItem"
          :show-overflow-tooltip="isShow"
        >
          <!-- 作用域插条 -->
          <template #default="scope">
            <slot :name="propItem.slotName" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="fotter" v-if="isShowPageaction">
      <slot name="fotter">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="page.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="page.pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="listCount"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  props: {
    listDate: {
      type: Array,
      required: true
    },
    listCount: {
      type: Number,
      default: 0
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 1, pageSize: 10 })
    },
    propList: {
      type: Array,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    showSelectColum: {
      type: Boolean,
      required: true
    },
    showIndexColum: {
      type: Boolean,
      required: false
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    isShowPageaction: {
      type: Boolean,
      default: true
    }
  },
  emits: ['selectChange', 'update:page'],
  setup(props, { emit }) {
    const handelSelectChange = (value: any) => {
      emit('selectChange', value)
    }
    const handleSizeChange = (pageSize: number) => {
      emit('update:page', { ...props.page, pageSize })
    }
    const handleCurrentChange = (currentPage: number) => {
      emit('update:page', { ...props.page, currentPage })
    }

    const isShow = ref(true)
    return {
      handelSelectChange,
      handleSizeChange,
      handleCurrentChange,
      isShow
    }
  }
})
</script>

<style scoped lang="less">
.el-table {
  margin: 0px auto 0;
}
.header {
  padding: 20px 0 0px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .handler {
    margin-right: 50px;
  }
}
.fotter {
  height: 50px;
  .el-pagination {
    margin-top: 20px;
    margin-right: 30px;
    float: right;
  }
}
</style>
