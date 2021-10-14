<template>
  <div class="list">
    <page-contant
      :contantConfig="contantConfig"
      :isadd="isadd"
      pageName="story"
    ></page-contant>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import PageContant from '@/components/page-contant'
import { contantConfig } from './config/contant.config'
export default defineComponent({
  name: 'list',
  components: {
    PageContant
  },
  setup() {
    const isadd = ref(true)
    return {
      contantConfig,
      isadd
    }
  }
})
</script>

<style scoped></style>
