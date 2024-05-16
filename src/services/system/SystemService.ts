import { apiResponseWrapper } from '@oceancode/ocean-ui'
import { ping as pingApi } from '@/api'

import { HomeOutline } from "@vicons/ionicons5";
import { User, TwoFactorAuthentication } from "@vicons/carbon";

export function ping(): Promise<string>{
  return apiResponseWrapper(pingApi())
}

export function loadSystemMenu(): Promise<Array<any>>{
  return Promise.resolve([
    {
      id: 1,
      title: '首页',
      router: {
        name: 'home'
      },
      permission:{
        and: ['login']
      },
      icon: {
        component: HomeOutline,
        size: 18,
        color: '#fff'
      }
    },
    {
      id: 2,
      title: '应用管理',
      icon: {
        component:User, 
        size:18,
        color: '#fff'
      },
      children: [
        {
          id: 3,
          title: '应用列表',
          icon: {
            component:User,
            size:18,
            color: '#000'
          },
          router: {
            name: 'appList'
          }
        }
      ]
    },
    {
      id: 3,
      title: '权限管理',
      icon: {
        component: TwoFactorAuthentication,
        size: 18,
        color: '#fff'
      },
      children: [
        {
          id: 4,
          title: '权限分组',
          router: {
            name: 'roleGroupList'
          }
        }
      ]
    }
  ])
}