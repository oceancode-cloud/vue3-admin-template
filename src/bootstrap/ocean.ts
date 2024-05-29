import type { App } from '@/App.vue';
import { 
  OAvatar,
  OInput,
  OIcon,
  OPopconfirm,
  OButton,
  OSpace,
} from '@oceancode/ocean-wui'

export function setupOcean(app:App){
  app.component("OAvatar",OAvatar)
  app.component("OInput",OInput)
  app.component("OIcon",OIcon)
  app.component("OInput",OInput)
  app.component("OPopconfirm",OPopconfirm)
  app.component("OButton",OButton)
  app.component("OSpace",OSpace)
}