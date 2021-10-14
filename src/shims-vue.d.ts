/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
  export default App
  declare module '*.js'
}
declare module '*.json'
declare module '*.txt'
