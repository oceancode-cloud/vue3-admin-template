import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
console.log(routes)
const routerHistory = createWebHashHistory();
const router = createRouter({
    history: routerHistory,
    routes: routes
})
router.beforeEach(async(to,from,next)=>{
    next()
})
export default router
