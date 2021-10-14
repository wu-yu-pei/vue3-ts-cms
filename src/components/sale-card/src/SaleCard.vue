<template>
  <div class="sale-card">
    <el-card class="box-card" :style="{ width, height }">
      <div class="head">
        <div class="head-left">{{ title }}</div>
        <div class="head-right">
          <el-tooltip
            class="item"
            effect="dark"
            :content="tips"
            placement="top"
          >
            <span><i class="el-icon-warning-outline"></i></span>
          </el-tooltip>
        </div>
      </div>
      <span class="money">¥</span>
      <span class="body" :id="id">{{ money }}</span>
      <div class="fotter">销售总量:{{ count }}</div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { CountUp } from 'countup.js'
export default defineComponent({
  props: {
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '150px'
    },
    title: {
      type: String,
      default: '销量'
    },
    money: {
      type: Number,
      default: 10
    },
    count: {
      type: Number,
      default: 0
    },
    id: {
      type: String,
      default: ''
    },
    tips: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    onMounted(() => {
      const countUp = new CountUp(props.id, props.money)
      countUp.start()
    })
    return {}
  }
})
</script>

<style scoped lang="less">
.sale-card {
  margin-bottom: 20px;
}
.box-card {
  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    font-size: 16px;
    color: #af9999;
    .head-right {
      span {
        cursor: pointer;
      }
    }
  }
  .body {
    font-size: 26px;
  }
  .money {
    font-size: 26px;
    margin-right: 10px;
  }
  .fotter {
    margin-top: 25px;
  }
}
</style>
