<template>
  <div class="login_panle">
    <h2 class="title">后台管理系统</h2>
    <el-tabs type="border-card" stretch v-model="tagname">
      <el-tab-pane name="acount">
        <template #label>
          <span><i class="el-icon-user-solid"></i> 账号登录</span>
        </template>
        <loginAccount ref="acountRef" />
      </el-tab-pane>
      <el-tab-pane name="phone">
        <template #label>
          <span><i class="el-icon-mobile"></i> 手机登录</span>
        </template>
        <loginPhone />
      </el-tab-pane>
    </el-tabs>
    <div class="control-account">
      <el-checkbox v-model="isKeepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" @click="handelLoginClick" class="submit"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

export default defineComponent({
  components: {
    loginAccount,
    loginPhone
  },
  setup() {
    const isKeepPassword = ref(true)
    // 通过这种方式获取我们的组件实例
    const acountRef = ref<InstanceType<typeof loginAccount>>()

    const tagname = ref<string>('acount')
    const handelLoginClick = () => {
      // 传入参数是否记住密码
      if (tagname.value === 'acount') {
        acountRef.value?.login(isKeepPassword.value)
      } else if (tagname.value === 'phone') {
        console.log('去调用phone里面的方法')
      }
    }
    return {
      isKeepPassword,
      tagname,
      handelLoginClick,
      acountRef
    }
  }
})
</script>

<style scoped lang="less">
.login_panle {
  width: 350px;
  .title {
    text-align: center;
  }
  .control-account {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
  }
  .submit {
    margin-top: 20px;
    width: 100%;
  }
}
</style>
