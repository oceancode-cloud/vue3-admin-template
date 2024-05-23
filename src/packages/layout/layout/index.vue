<template>
  <o-context>
    <o-layout position="absolute">
      <template #header>
        <o-layout-header :height="50" >
          <template #menu>
            <o-layout-nav-menu hover-background-color="" hover-color="blue" color="#000" :menus="loadNavMenu"></o-layout-nav-menu>
          </template>
        </o-layout-header>
      </template>
      <template #sider>
        <o-layout-sider :menus="loadSystemMenu"  logo="https://www.naiveui.com/assets/naivelogo-BdDVTUmz.svg">
        </o-layout-sider>
      </template>
      <template #menu>
        <o-layout-list-menu></o-layout-list-menu>
      </template>
      <div style="margin-left: 10px;margin-top:10px;height:100%;overflow:auto">
        <router-view></router-view>
      </div>
    </o-layout>
</o-context>
</template>

<script lang="ts" setup>
import { loadSystemMenu,loadNavMenu } from '@/services'
</script>
<style lang="scss" scoped>
</style>