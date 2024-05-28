<template>
  <div class="user-info">
    <n-dropdown trigger="hover" :options="options" @select="handleSelect">
      <span>
        <o-avatar round :src="userInfo.avatar" v-if="userInfo">
            <template>
              qinjiawang
            </template>
            <template #icon>
              <UserOutlined/>
            </template>
        </o-avatar>
      </span>
    </n-dropdown>
    <!-- <o-avatar round :src="userInfo.avatar" v-if="userInfo">
          <template>
            qinjiawang
          </template>
          <template #icon>
            <UserOutlined/>
          </template>
      </o-avatar> -->
  </div>
  
</template>

<script lang="ts" setup>
import { computed,h,defineProps } from 'vue'
import { OAavatar,useUser,useRouter } from '@oceancode/ocean-wui'
import { NDropdown,NAvatar,NText } from 'naive-ui'
const props = defineProps({
   options: Array
})
const user = useUser();
const router = useRouter()
const userInfo = computed(()=>user.getUserInfo())

function renderCustomHeader () {
  return h(
    'div',
    {
      style: 'display: flex; align-items: center; padding: 8px 12px;'
    },
    [
      h(NAvatar, {
        round: true,
        style: 'margin-right: 12px;',
        src: userInfo.value.avatar
      }),
      h('div', null, [
        h('div', null, [h(NText, { depth: 2 }, { default: () => userInfo.value.username  })]),
        h('div', { style: 'font-size: 12px;' }, [
          h(
            NText,
            { depth: 3 },
            { default: () => userInfo.value.nickname }
          )
        ])
      ])
    ]
  )
}

const options = props.options && props.options.length>0?props.options : [
  {
    key: 'header',
    type: 'render',
    render: renderCustomHeader
  },
  {
    key: 'header-divider',
    type: 'divider'
  },
  {
    label:'退出登录',
    key:'logout',
    onClick(){
      user.logout()
      router.toLogin()
    }
  }
]

function handleSelect(key,option){
  if(option.onClick){
    option.onClick()
    return
  }
}
</script>
<style lang="scss" scoped>
.user-info{
  margin-right: 10px;
}
</style>