import { createApp } from 'vue'
import App from './App.vue'
import { bootstrap } from './bootstrap'
// import './plugins'
import router from './router'
// import '@oceancode/ocean-ui/dist/style.css'

const app = createApp(App)
bootstrap(app)
.then(()=>{
  app.use(router)
  app.mount('#app')
})

