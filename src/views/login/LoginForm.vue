<template>
  <o-form ref="Form"></o-form>
</template>
<script setup>
import { h } from 'vue' 
import { useForm,OUsernameInput,OPasswordInput,useUser,useRouter } from '@oceancode/ocean-wui'
import { userLogin} from '@/api'
const user = useUser()
const router = useRouter()
const Form = useForm({
  items:[
    {
      prop:'username',
      component:{
        render:()=>h(OUsernameInput)
      }
    },
    {
      prop:'password',
      component:{
        render:()=>(OPasswordInput)
      }
    }
  ],
  on:{
    submit(params){
      userLogin(params)
      .then(async(data)=>{
        user.setLoginResponse(data)
        await user.refreshPermission()
        router.toHome()
      })
      .catch(err=>{
        user.refreshPermission()
      })
    }
  }
})
</script>