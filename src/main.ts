import { createApp } from 'vue'
import App from './App.vue'
import router from './route/index'
import store from './store/index'
import { globalRegister } from './global'
import 'normalize.css'
import './assets/less/index.less'
import { setupStoreState } from './store/index'
const app = createApp(App)
// 注册element组件
//1. globalRegister(app)
//2. use 中间件的方式 会自动传入app
app.use(globalRegister)
app.use(store)
setupStoreState()
app.use(router)
app.mount('#app')
