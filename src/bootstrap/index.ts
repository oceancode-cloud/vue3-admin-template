import type { App } from "vue"
import { checkPermission } from '@oceancode/ocean-wui'
import { setupPlugins } from '@/plugins'
import { setupOcean } from './ocean'

export async function bootstrap(app: App) {
  app.config.globalProperties.$checkPermission = checkPermission
  setupOcean(app)
  setupPlugins(app)
}
