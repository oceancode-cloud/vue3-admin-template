<template>
  <o-app style="height: 100%">
    <o-layout style="height: 100%">
      <slot></slot>
    </o-layout>
  </o-app>
</template>
<script setup>
import { OLayout } from '@oceancode/ocean-ui'
</script>