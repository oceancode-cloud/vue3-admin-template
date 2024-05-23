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
            path: '/login',
            name:'login',
            component: () => import('@/views/home.vue')
        },
        {
            path: '/dashboard',
            component: () => import('@/packages/layout/layout/index.vue'),
            children:[
                {
                    path:'',
                    name:'home',
                    component:()=>import('@/views/home.vue')
                },
                {
                    path:'test',
                    name:'test',
                    component:()=>import('@/views/test.vue')
                }
            ]
        },
    ]
})

export default router
