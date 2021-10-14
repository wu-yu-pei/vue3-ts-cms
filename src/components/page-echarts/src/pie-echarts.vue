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
    pieData: {
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
        title: {
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'horizontal',
          left: 'left'
        },
        series: [
          {
            name: '分类数据',
            type: 'pie',
            radius: '50%',
            data: props.pieData,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
