import { registerPlugins,RouterPlugin,PluginType } from '@oceancode/ocean-wui'
import router from '@/router'
/*
  toHome(router: RouterParam):void
  toLogin(router?: RouterParam):void
  push(router: RouterParam,param?:any):void
  open(router: RouterParam):void
  getProjectId():number|string
  getName():string
  getPrams():Record<string,any>
  getQuery():Record<string,any>
*/
export function routerPlugin():RouterPlugin{
  console.log(router)
  
  return {
    name: PluginType.ROUTER,
    toHome:()=>router.push({name:'home'}),
    push:(r: any)=>{
      router.push(r)
      if(r.replace){
        window.location.reload()
      }
    },
    toLogin:()=>{
      // router.push({name:'login'})
    }
  }
}