import { useRouter, useUser } from '@oceancode/ocean-wui';
import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
const routerHistory = createWebHashHistory();
const router = createRouter({
    history: routerHistory,
    routes: routes
})


router.beforeEach(async(to,from,next)=>{
    const permissions = (to.meta?.permissions || []) as Array<string>
    for(const it of permissions){
        if(it==='login'){
            if(!useUser().isLogin()){
                useRouter().toLogin()
                return
            }
        }
    }
    next()
})
export default router
