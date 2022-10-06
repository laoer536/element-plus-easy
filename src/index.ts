import components from './components'
import type { App, Plugin } from 'vue'

export const install = (Vue: App) => {
  let name: keyof typeof components
  for (name in components) {
    Vue.component(name, components[name])
  }
}
export * from './components/collect'
export * from './global'
export default {
  install,
} as Plugin
