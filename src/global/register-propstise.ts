import { App } from 'vue'
import { formatUtcString } from '@/utils/dataformat'
export default function (app: App) {
  app.config.globalProperties.$filters = {
    foo() {
      console.log('foo')
    },
    formatTime(time: string) {
      return formatUtcString(time)
    }
  }
}
