import { deepTree } from '@oceancode/ocean-wui'

const routeList = [
  {
    id: 1,
    path: '/',
    redirect: '/home'
  },
  {
    id:2,
    path: '/home',
    component: () => import('@/views/home.vue')
  },
  {
    id:3,
    path: '/login',
    name:'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    id:4,
    path: '/dashboard',
    component: () => import('@/packages/layout/layout/index.vue')
  },
  {
    id:5,
    parentId:4,
    path:'',
    name:'home',
    meta:{
      resourceId: 'user_list',
      permissions:['login']
    },
    component:()=>import('@/views/home.vue')
  },
  {
    id:6,
    parentId:4,
    path:'test',
    name:'test',
    component:()=>import('@/views/test.vue')
  }
]

export const routes = deepTree(routeList)