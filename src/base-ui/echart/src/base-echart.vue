<template>
  <div class="base-echarts">
    <div ref="echartDivRef" :style="{ width, height }"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watchEffect } from 'vue'
import useEchart from './hooks/useEchat'
export default defineComponent({
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '300px'
    },
    option: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  setup(props) {
    const echartDivRef = ref<HTMLElement>()
    onMounted(() => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const { setOption } = useEchart(echartDivRef.value!)
      watchEffect(() => {
        setOption(props.option)
      })
    })
    return {
      echartDivRef
    }
  }
})
</script>
<style scoped></style>
