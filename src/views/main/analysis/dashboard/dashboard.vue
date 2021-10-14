<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="12" v-for="item in goodsAmountList" :key="item.count">
        <sale-card v-bind="item"></sale-card>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)">
          <pie-echart :pieData="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量">
          <map-echarts :mapData="addressGoodsSale"></map-echarts>
        </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)">
          <role-echart :roleData="categoryGoodsCount"></role-echart>
        </hy-card>
      </el-col>
    </el-row>
    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <hy-card title="分类商品的销量">
          <line-echart v-bind="categoryGoodsSale"></line-echart>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品的收藏">
          <column-echart v-bind="categoryGoodsFavor"></column-echart>
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

import HyCard from '@/base-ui/card'
import SaleCard from '@/components/sale-card'
import {
  PieEchart,
  RoleEchart,
  LineEchart,
  ColumnEchart,
  MapEcharts
} from '@/components/page-echarts/index'

import { useStore } from '@/store'

export default defineComponent({
  name: 'dashboard',
  components: {
    HyCard,
    PieEchart,
    RoleEchart,
    LineEchart,
    ColumnEchart,
    MapEcharts,
    SaleCard
  },
  setup() {
    const store = useStore()
    store.dispatch('dashboard/getDashboardDataAction')

    const goodsAmountList = computed(() => {
      return store.state.dashboard.goodsAmountList.map((item) => {
        return {
          title: item.title,
          count: item.number1,
          money: item.number1 * 90.7,
          id: item.amount,
          tips: item.tips
        }
      })
    })

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item: any) => {
        return {
          value: item.goodsCount,
          name: item.name
        }
      })
    })

    const categoryGoodsSale = computed(() => {
      const xLabel: string[] = []
      const value: any[] = []
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      for (const item of categoryGoodsSale) {
        xLabel.push(item.name)
        value.push(item.goodsCount)
      }
      return {
        xLabel,
        value
      }
    })

    const categoryGoodsFavor = computed(() => {
      const xLabel: string[] = []
      const value: any[] = []
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor

      for (const item of categoryGoodsFavor) {
        xLabel.push(item.name)
        value.push(item.goodsFavor)
      }
      return {
        xLabel,
        value
      }
    })

    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return {
          name: item.address,
          value: item.count
        }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale,
      goodsAmountList
    }
  }
})
</script>

<style scoped>
.content-row {
  margin-top: 10px;
}
</style>
