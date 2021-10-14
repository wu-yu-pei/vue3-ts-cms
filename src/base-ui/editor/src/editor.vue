<template>
  <div ref="editorRef"></div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue'
import editor from 'wangeditor'
import type Editor from 'wangeditor'
export default defineComponent({
  props: {
    height: {
      type: Number,
      default: 500
    },
    text: {
      type: String,
      default: '123'
    }
  },
  emits: ['update:value'],
  setup(props, { emit }) {
    const editorRef = ref<InstanceType<typeof HTMLElement>>()
    const editorInstance = ref<Editor | null>(null)
    onMounted(() => {
      initEditor()
    })

    // 创建Editor实例
    const initEditor = () => {
      editorInstance.value = new editor(editorRef.value)

      editorInstance.value.config.height = props.height

      editorInstance.value.create()

      initEditorMenus(editorInstance.value)

      editorInstance.value.txt.html(props.text)

      editorInstance.value.config.onchange = (newtext: HTMLElement) => {
        emit('update:value', newtext)
      }
    }

    watch(
      () => props.text,
      () => {
        if (editorInstance.value) {
          editorInstance?.value.txt.html(props.text)
        }
      }
    )
    // 配置菜单
    const initEditorMenus = (editorInstance: any) => {
      editorInstance.config.menus = [
        'head',
        'bold',
        'fontSize',
        'fontName',
        'italic',
        'underline',
        'strikeThrough',
        'indent',
        'lineHeight',
        'foreColor',
        'backColor',
        'link',
        'list',
        'todo',
        'justify',
        'quote',
        'emoticon',
        'image',
        'video',
        'table',
        'code',
        'splitLine',
        'undo',
        'redo'
      ]
    }

    return {
      editorRef
    }
  }
})
</script>

<style scoped></style>
