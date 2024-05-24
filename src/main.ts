import { createApp } from 'vue'
import App from './App.vue'
import { bootstrap } from './bootstrap'
import router from './router'

const app = createApp(App)
bootstrap(app)
.then(()=>{
  app.use(router)
  app.mount('#app')
})

