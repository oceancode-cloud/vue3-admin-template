import type { App } from "vue"
import { checkPermission } from '@oceancode/ocean-wui'
import { setupPlugins } from '@/plugins'

export async function bootstrap(app: App) {
  app.config.globalProperties.$checkPermission = checkPermission
  setupPlugins(app)
}
