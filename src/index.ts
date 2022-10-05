import EyButton from './components/EyButton.vue'
import type { App } from 'vue'
const components: [typeof EyButton] = [EyButton]
export const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export { EyButton }
export default {
  install,
}
