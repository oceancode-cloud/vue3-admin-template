<template>
  <page-layout-context>
    <o-slider-layout>
      <template #header>
        <o-layout-header>
          <template #project>
            <o-project-select :options="listUserProjectOption" :action="actionOption"></o-project-select>
          </template>
          <template #user-info>
            <UserInfoCom></UserInfoCom>
          </template>
        </o-layout-header>
      </template>
      <template #menu>
        <o-layout-menu :on-load="loadSystemMenu"></o-layout-menu>
      </template>
      <router-view></router-view>
    </o-slider-layout>
  </page-layout-context>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { 
  OSliderLayout,
  OLayoutHeader,
  OProjectSelect,
  OAddIcon,
  OLayoutMenu,
} from '@oceancode/ocean-ui'
import { 
  listUserProjectOption,
  loadSystemMenu
} from '@/services'

import UserInfoCom from './UserInfo.vue'

const actionOption = {
  text:'创建工作区',
  to:{
    name:'workspaceIndex',
  },
  icon: {
    component: OAddIcon,
  }
}
</script>
<style lang="scss" scoped>
</style>