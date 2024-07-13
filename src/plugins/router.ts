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
  return {
    name: PluginType.ROUTER,
    toHome:()=>router.push({name:'home'}),
    getName:()=>router.currentRoute.value.name,
    push:(r: any)=>{
      router.push(r)
      .finally(()=>{
        if(r.replace){
          window.location.reload()
        }
      })
    },
    open:(r)=>{
      const routeData = router.resolve(r)
      window.open(routeData.href, '_blank');
    },
    getParams:()=>router.currentRoute.value.params,
    getQuery:()=>router.currentRoute.value.query,
    getMeta:()=>router.currentRoute.value.meta,
    toLogin:()=>{
      router.push({name:'login'})
    }
  }
}