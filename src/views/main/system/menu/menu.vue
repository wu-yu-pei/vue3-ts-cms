<template>
  <div class="menu">
    <page-contant
      :contantConfig="contantConfig"
      pageName="menu"
      :isadd="isadd"
    ></page-contant>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageContant from '@/components/page-contant'
import { contantConfig } from './config/contant.config'
export default defineComponent({
  name: 'menus',
  components: {
    PageContant
  },
  setup() {
    const isadd = ref(false)
    return {
      isadd,
      contantConfig
    }
  }
})
</script>

<style scoped></style>
