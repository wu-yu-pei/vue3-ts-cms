<template>
  <div class="chat">
    <wy-editor
      :height="500"
      v-model:text="html"
      @update:value="updata"
    ></wy-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import WyEditor from '@/base-ui/editor'
export default defineComponent({
  name: 'chat',
  components: {
    WyEditor
  },
  setup() {
    const html = ref<string>('wuyupei')
    const updata = (newtext: string) => {
      html.value = newtext
    }
    return {
      html,
      updata
    }
  }
})
</script>

<style scoped>
.chat {
  margin-top: 30px;
}
</style>
