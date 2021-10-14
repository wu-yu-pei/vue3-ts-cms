<template>
  <div class="pie-echarts">
    <base-echarts :option="option"></base-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import BaseEcharts from '@/base-ui/echart'
export default defineComponent({
  props: {
    roleData: {
      type: Object,
      required: true
    }
  },
  components: {
    BaseEcharts
  },
  setup(props) {
    const option = computed(() => {
      return {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: '面积模式',
            type: 'pie',
            radius: [10, 100],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: props.roleData
          }
        ]
      }
    })
    return {
      option
    }
  }
})
</script>

<style scoped></style>
