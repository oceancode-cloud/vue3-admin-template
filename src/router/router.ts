import { Router, createRouter, createWebHashHistory, createWebHistory } from 'vue-router';
import { useUser,useLayout,deepTree } from '@oceancode/ocean-ui'
const routes = [

] as any;
export function createNewRouter(routeList:any, config?: any) {
  routeList.forEach((item:any) => {
    const rt = routes.find((e:any) => e.name === item.name)
    if (!rt) {
      routes.push(item)
    }
  })
  let r
  const isHash = config && config.mode && config.mode === 'hash'
  const hasBase = config && config?.base ? true : false
  if (!isHash) {
    if (hasBase) {
      r = createWebHistory(config?.base)
    } else {
      r = createWebHistory()
    }
  } else {
    if (hasBase) {
      r = createWebHashHistory(config?.base)
    } else {
      r = createWebHashHistory()
    }
  }
  return createRouter({
    history: r,
    routes,
  })
}

function buildRouterParams() {
  const user = useUser();
  return {
    params: {
      projectId: user.getProjectId
    }
  }
}
const user = useUser();
const layoutStore = useLayout();
function checkLogin() {
  const isLogin = user.isLogin && (user.getToken + '').trim().length > 0
  return isLogin
}
export function createRouterGuards(router: Router, openLoginWidget: Function) {
  router.beforeEach(async (to, from, next) => {
    const Loading = window['$loading'] || null;
    Loading && Loading.start();
    next();
  });

  router.afterEach((to, _, failure) => {
    document.title = (to?.meta?.title as string) || document.title;
    const Loading = window['$loading'] || null;
    Loading && Loading.finish();
  });

  router.onError((error) => {
    console.log(error, '路由错误');
  });
}

let routerInstance = null as any
export function setupRouter(app:any,routerConfig:any){
  const routes = deepTree(routerConfig.routes ?? [])
  routerInstance = createNewRouter(routes,routerConfig);
	app.use(routerInstance)
	createRouterGuards(routerInstance,routerConfig?.openLoginWidegt);
}

export function getRouter(){
  return routerInstance
}

