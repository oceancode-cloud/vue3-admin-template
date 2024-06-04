<template>
  <router-view v-slot="{Component}" v-if="$route.meta && $route.meta.keepAlive">
    <keep-alive>
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
  <router-view v-else></router-view>
</template>
<script lang="ts" setup name="AppRouter">
</script>