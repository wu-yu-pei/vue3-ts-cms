<template>
  <div class="login">
    <loginPanle />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import loginPanle from './cmps/login-panle.vue'
export default defineComponent({
  components: {
    loginPanle
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url('../../assets/img/login-bg.svg');
}
</style>
