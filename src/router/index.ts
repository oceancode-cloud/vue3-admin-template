import { createRouter, createWebHashHistory } from 'vue-router'

const routerHistory = createWebHashHistory();
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import('@/views/home.vue')
        },
        {
            path: '/dashboard',
            component: () => import('@/packages/layout/layout/index.vue'),
            children:[
                {
                    path:'',
                    component:()=>import('@/views/home.vue')
                }
            ]
        },
    ]
})

export default router
