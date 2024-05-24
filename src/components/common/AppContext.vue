<template>
  <slot></slot>
</template>
<script lang="ts" setup>
import { useRoute} from 'vue-router'
import { watch } from 'vue'
import { useUser } from '@oceancode/ocean-wui'

const route = useRoute()
const user = useUser()

watch(
  () => route.fullPath,
  (val) => {
    console.log('===router change',val)
    user.refreshPermission()
  },
  { immediate: true }
)
</script>