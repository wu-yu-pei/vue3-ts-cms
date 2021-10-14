<template>
  <div class="head">
    <i
      class="fold-menu"
      :class="isFold ? 'el-icon-s-fold' : 'el-icon-s-unfold'"
      @click="handleFoldClick"
    ></i>
    <div class="head-left">
      <div>
        <wy-bread :bread="bread"></wy-bread>
      </div>
      <div class="head-left-userinfo">
        <div class="message">
          <i class="el-icon-chat-line-round"></i>
          <i class="el-icon-collection-tag"></i>
          <el-badge is-dot class="item" type="danger">
            <i class="el-icon-dish"></i>
          </el-badge>
        </div>
        <el-dropdown>
          <span class="el-dropdown-link">
            <el-avatar :src="userImgUrl"></el-avatar>
            <div class="feng"></div>
            {{ name }}
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-upload
                action="http://wuyupei.top:8002/api/uploadimg"
                :on-success="sucess"
                :show-file-list="isShowFileList"
                :on-error="err"
              >
                <el-dropdown-item icon="el-icon-plus"
                  >上传图像</el-dropdown-item
                >
              </el-upload>
              <el-dropdown-item icon="el-icon-switch-button" @click="over"
                >退出登录</el-dropdown-item
              >
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from '../../../store/index'
import WyBread from '@/base-ui/breadcremb'
import { mapBread } from '@/utils/mapmenus'
import { useRoute } from 'vue-router'
import LocalCache from '@/utils/cache'
export default defineComponent({
  emits: ['foldChange'],
  components: {
    WyBread
  },
  setup(_, { emit }) {
    const isFold = ref(false)
    const isShowFileList = ref(false)
    const store = useStore()
    const router = useRouter()
    // 用户图像部分
    let url = ref(
      'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    )
    const userImgUrl = computed(() => {
      let tureUrl = LocalCache.get('userImgUrl')
      if (tureUrl) {
        url = ref(tureUrl)
      }
      return url.value
    })

    const bread = computed(() => {
      const userMenus = store.state.Login.usermenus
      const route = useRoute()
      return mapBread(userMenus, route.path)
    })

    const handleFoldClick = () => {
      isFold.value = !isFold.value
      console.log(isFold.value)
      emit('foldChange', isFold.value)
    }
    // 处理用户图像部分
    const sucess = (res: any) => {
      LocalCache.set('userImgUrl', `http://wuyupei.top:8001/images/${res}`)
      url.value = `http://wuyupei.top:8001/images/${res}`
    }

    const err = (error: any) => {
      LocalCache.set(
        'userImgUrl',
        'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      )
      url.value =
        'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
      console.log(error)
    }
    // 退出登录
    const over = () => {
      console.log(2)

      LocalCache.clear()
      router.replace('/login')
    }

    //用户名
    const name = LocalCache.get('name')
    return {
      isFold,
      handleFoldClick,
      bread,
      sucess,
      err,
      userImgUrl,
      isShowFileList,
      over,
      name
    }
  }
})
</script>

<style scoped lang="less">
.fold-menu {
  font-size: 30px;
  line-height: 60px;
}
.head {
  display: flex;
  justify-content: space-between;
  .head-left {
    flex: 1;
    display: flex;
    padding: 0 20px;
    justify-content: space-between;
    align-items: center;
  }
  .head-left-userinfo {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
    .el-dropdown-link {
      display: flex;
      align-items: center;
    }
  }
}
.feng {
  margin: 0 3px;
}
.message {
  margin-right: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: inherit;
  width: 100px;
  i {
    font-size: 20px;
  }
}
</style>
