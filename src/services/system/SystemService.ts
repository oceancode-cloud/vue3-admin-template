import { apiResponseWrapper,OIcon } from '@oceancode/ocean-wui'
import { ping as pingApi } from '@/api'

import { HomeOutline } from "@vicons/ionicons5";
import { User, TwoFactorAuthentication } from "@vicons/carbon";

export function ping(): Promise<string>{
  return apiResponseWrapper(pingApi())
}

export function loadNavMenu():Promise<Array<any>>{
  return Promise.resolve([
    {
      label:'开源版本功能',
      key:'1',
      router:{
        name:'home'
      }
    },
    {
      label:'企业版本功能',
      key:'2',
      router:{
        name:'test'
      }
    },
    {
      label:'插件市场',
      key:'3'
    }
  ])
}

export function loadSystemMenu(): Promise<Array<any>>{
  return Promise.resolve([
    {
      label:'系统首页',
      key:'home',
      router:{
        name:'home'
      },
      icon:{
        component:OIcon,
        props:{
          component:HomeOutline,
          props:{
            size: 25
          }
        }
      },
    },
    {
      label:'组织架构',
      key:'part',
      router:{
        name:'test'
      },
      icon:{
        component:OIcon,
        props:{
          component:User
        }
      },
      children:[
        {
          label:'组织管理',
          key:'1',
          router:{
            name:'home'
          }
        },
        {
          label:'用户列表',
          key:'11',
          children:[
            {
              label:'aaa',
              key:'2',
              router:{
                name:'test'
              }
            }
          ]
        }
      ]
    }
  ])
}

export function listUserPermission(): Promise<any>{
  return Promise.resolve({
    user_list:['user:add','user:delete'],
  })
}