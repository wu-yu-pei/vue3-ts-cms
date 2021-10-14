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
    title: {
      type: String,
      defautl: ''
    },
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
        title: {
          text: props.title
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: props.xLabel
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: '分类销量',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            emphasis: {
              focus: 'series'
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
