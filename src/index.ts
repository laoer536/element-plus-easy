import components from './components'
import type { App, Plugin } from 'vue'

export const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
export * from './components/collect'
export * from './global'
export default {
  install,
} as Plugin
