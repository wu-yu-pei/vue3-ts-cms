<template>
  <div>
    <el-form
      label-width="70px"
      label-position="left"
      :rules="rules"
      :model="account"
      ref="formRef"
    >
      <el-form-item label="账号:" prop="name"
        ><el-input v-model="account.name"></el-input>
      </el-form-item>
      <!-- 利用浏览器的元素选则器可以查看密码,并没有加密 -->
      <el-form-item label="密码:" prop="password"
        ><el-input
          type="password"
          show-password
          v-model="account.password"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { ElForm } from 'element-plus'
import LocalCache from '../../../utils/cache'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const store = useStore()
    const account = reactive({
      name: LocalCache.get('name') ?? '',
      password: LocalCache.get('password') ?? ''
    })
    // 获取elForm对象
    const formRef = ref<InstanceType<typeof ElForm>>()

    const login = (isKeepPassword: boolean) => {
      // 表单验证  Valid是一个boolen值
      formRef.value?.validate((Valid) => {
        if (Valid) {
          // 利用封装的函数 把数据储存到localstorage里面
          if (isKeepPassword) {
            LocalCache.set('name', account.name)
            LocalCache.set('password', account.password)
          } else {
            LocalCache.clear()
          }
          store.dispatch('Login/loginAccountAction', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      login,
      formRef
    }
  }
})
</script>

<style scoped></style>
