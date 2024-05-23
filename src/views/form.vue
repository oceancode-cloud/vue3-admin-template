<template>
  <o-form ref="Form">
  </o-form>
</template>

<script setup>
import { 
  useForm,OForm,OInput,OUsernameInput,
  OIcon,OPasswordInput,
  OSelect
 } from "@oceancode/ocean-wui";
 import { PersonOutline,AccessibilitySharp,Add } from '@vicons/ionicons5'
import {h} from 'vue';
const Form = useForm({
  title:'登录',
  formValue:{
    id:1
  },
  items: [
    {
        prop:'username',
        component:{
          render(){
            return h(OPasswordInput,{icon:{component:PersonOutline,color:'#808695'}})
          }
        },
        rules: {
          required: true,
          type: 'string',
          message: "请输入登录账号",
        }
      },
    {
      prop:'password',
      component: {
        render(row){
          return h(OInput,{tooltip:{
            message: '如何获取',
            url: {
              url:'http://www.baidu.com'
            }
          }})
        }
      },
      on: {
        change(newVal,oldVal,params){
          console.log(newVal,oldVal,params)
        }
      }
    },
    {
      label:'test',
      prop:'test'
    }
  ],
  on:{
    submit(params){
      console.log('=====form submit',params)
    }
  }
})
</script>