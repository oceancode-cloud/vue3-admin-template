import { registerPlugins } from '@oceancode/ocean-wui'
// import { axoisRequest } from './axios';
// requestPlugin(axoisRequest)
import { routerPlugin } from './router'


export function setupPlugins(){
  registerPlugins([
    routerPlugin()
  ])
}