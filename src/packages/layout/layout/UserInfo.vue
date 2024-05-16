<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <o-avatar round src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" v-if="userInfo">
        <template>
          qinjiawang
        </template>
        <template #icon>
          <UserOutlined/>
        </template>
    </o-avatar>
  </n-dropdown>
  
</template>

<script lang="ts" setup>
import { computed,h } from 'vue'
import { OAavatar,useUser } from '@oceancode/ocean-ui'
import { NDropdown,NAvatar,NText } from 'naive-ui'
const user = useUser();
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
        src: 'https://07akioni.oss-cn-beijing.aliyuncs.com/demo1.JPG'
      }),
      h('div', null, [
        h('div', null, [h(NText, { depth: 2 }, { default: () => '打工仔' })]),
        h('div', { style: 'font-size: 12px;' }, [
          h(
            NText,
            { depth: 3 },
            { default: () => '毫无疑问，你是办公室里最亮的星' }
          )
        ])
      ])
    ]
  )
}

const options = [
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
    key:'logout'
  }
]

function handleSelect(){

}
</script>