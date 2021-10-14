<template>
  <div class="main">
    <el-container>
      <el-aside :width="isCollapse ? '60px' : '200px'">
        <nav-menu :collapce="isCollapse"></nav-menu>
      </el-aside>
      <el-container>
        <el-header>
          <nav-hader @foldChange="handleFoldChange"></nav-hader>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import NavHader from '../../components/nav-header'
import NavMenu from '../../components/nav-menu'
export default defineComponent({
  components: {
    NavHader,
    NavMenu
  },
  setup() {
    const isCollapse = ref(false)
    const handleFoldChange = (isFold: boolean) => {
      isCollapse.value = isFold
    }
    return {
      isCollapse,
      handleFoldChange
    }
  }
})
</script>

<style scoped lang="less">
.main {
  height: 100%;
}
.el-container {
  height: 100%;
  background-color: #eff0f5;
}
.el-header {
  background-color: #fff;
}
.el-aside {
  height: 100%;
  background-color: #001529;
  transition: width ease-in-out 0.35s;
  overflow: hidden;
}
</style>
