import type { App } from "vue"
import { PageContext,PageLayoutContext } from "@/components"
import { setupOcean } from '@oceancode/ocean-ui'
import { setupCommonComponents } from './ocean'
import { setupNaive } from './naiveui'

export async function bootstrap(app: App) {
  setupOcean(app)
  setupCommonComponents(app)
  setupNaive(app)
  app.component('PageContext', PageContext)
  app.component('PageLayoutContext', PageLayoutContext)
}