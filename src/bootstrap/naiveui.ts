import type { App } from "vue";
import {
  create,
  NAvatar,
  NInput,
  NButton,
  NIcon,
  NSelect
} from 'naive-ui'

const naive = create({
  components: [NAvatar,NInput,NButton,NIcon,NSelect]
})
export function setupNaive(app:App){
  app.use(naive)
}