<template>
  <div class="goods">
    <page-contant :contantConfig="contantConfig" pageName="goods">
      <template #image="scope">
        <el-image
          style="width: 60px; height: 60px"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        >
        </el-image>
      </template>
      <template #oldPrice="scope">
        {{ '￥' + scope.row.oldPrice }}
      </template>
      <template #newPrice="scope">
        {{ '￥' + scope.row.newPrice }}
      </template>
    </page-contant>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contantConfig } from './config/contant.config'

import PageContant from '@/components/page-contant'
export default defineComponent({
  name: 'goods',
  components: {
    PageContant
  },
  setup() {
    return {
      contantConfig
    }
  }
})
</script>

<style scoped></style>
