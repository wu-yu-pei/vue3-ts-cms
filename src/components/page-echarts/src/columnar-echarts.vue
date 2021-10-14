<template>
  <div class="pie-echarts">
    <base-echarts :option="option"></base-echarts>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import * as echarts from 'echarts'
import BaseEcharts from '@/base-ui/echart'
export default defineComponent({
  props: {
    xLabel: {
      type: Array,
      required: true
    },
    value: {
      type: Array,
      required: true
    }
  },
  components: {
    BaseEcharts
  },
  setup(props) {
    const option = computed(() => {
      return {
        xAxis: {
          data: props.xLabel,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          z: 10
        },
        yAxis: {
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            color: '#999'
          }
        },
        dataZoom: [
          {
            type: 'inside'
          }
        ],
        series: [
          {
            type: 'bar',
            showBackground: true,
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: '#83bff6' },
                { offset: 0.5, color: '#188df0' },
                { offset: 1, color: '#188df0' }
              ])
            },
            emphasis: {
              itemStyle: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: '#2378f7' },
                  { offset: 0.7, color: '#2378f7' },
                  { offset: 1, color: '#83bff6' }
                ])
              }
            },
            data: props.value
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
