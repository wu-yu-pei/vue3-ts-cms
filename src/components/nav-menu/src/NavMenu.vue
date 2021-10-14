<template>
  <div class="nav-menu">
    <div class="nav-menu-logo">
      <img src="~@/assets/img/logo.svg" alt="" />
      <span v-if="!collapce">VUE3+TS</span>
    </div>
    <el-menu
      :uniqueOpened="true"
      :default-active="currentmenu"
      :collapse="collapce"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="#fff"
      active-text-color="#0b56b5"
      :collapse-transition="isTransition"
    >
      <template v-for="item in userMenus" :key="item.id">
        <!-- 二级菜单 -->
        <template v-if="item.type === 1">
          <el-submenu :index="item.id + ''">
            <template #title>
              <i v-if="item.icon" :class="item.icon"></i>
              <span>{{ item.name }}</span>
            </template>
            <!-- 二级菜单可展开选项 -->
            <template v-for="subitem in item.children" :key="subitem.id">
              <el-menu-item-group>
                <el-menu-item :index="subitem.id + ''" @click="go(subitem)">
                  <i v-if="subitem.icon" :class="subitem.icon"></i>
                  <span>{{ subitem.name }}</span>
                </el-menu-item>
              </el-menu-item-group>
            </template>
          </el-submenu>
        </template>
        <!-- 一级菜单 -->
        <template v-else-if="item.type === 2">
          <el-menu-item :index="item.id + ''">
            <i v-if="item.icon" :class="item.icon"></i>
            <span>{{ item.name }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useStore } from '../../../store/index'
import { mapMenuToCurrentMenu } from '@/utils/mapmenus'
export default defineComponent({
  props: {
    collapce: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const route = useRoute()

    const userMenus = computed(() => store.state.Login.usermenus)
    // console.log(userMenus.value, route.path)
    const menu = mapMenuToCurrentMenu(userMenus.value, route.path)
    // console.log(menu, route.path)
    const isTransition = ref(true)
    const currentmenu = ref(menu.id + '')
    const go = (item: any) => {
      router.push({
        path: item.url
      })
    }
    return {
      go,
      userMenus,
      currentmenu,
      isTransition
    }
  }
})
</script>

<style scoped lang="less">
.nav-menu-logo {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
  }
  span {
    font-weight: 800;
    color: #fff;
    margin-left: 20px;
  }
}
.el-menu {
  border-right: none;
}
.el-submenu {
  background-color: #001529;
}
.el-menu-item {
  background-color: transparent;
}
.is-active {
  background-color: rgb(11, 89, 181) !important;
  color: #fff !important;
}
</style>
