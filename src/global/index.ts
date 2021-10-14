import { App } from 'vue'
import registerElement from './register-element'
import registerPropstise from './register-propstise'
export function globalRegister(app: App): void {
  // registerElement(app)
  app.use(registerElement)
  app.use(registerPropstise)
}
