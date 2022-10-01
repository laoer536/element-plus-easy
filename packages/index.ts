import { EyButton } from './components/EyButton/index'
import type { App } from 'vue'
const components: any[] = [EyButton]
export const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export { EyButton }
export default {
  install,
}
