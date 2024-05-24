<template>
  <o-root-context>
    <AppContext>
      <router-view></router-view>
    </AppContext>
  </o-root-context>
</template>
<script setup>
import { AppContext } from '@/components';
</script>