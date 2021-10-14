<template>
  <div>
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in bread" :key="index">
        <el-breadcrumb-item>{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    bread: {
      type: Array,
      reuired: true
    }
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
