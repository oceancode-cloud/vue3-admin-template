<template>
  <div>
    <button @click="handlePing">ping</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { ping } from '@/services';

function handlePing(){
  ping().then(data=>console.log(data))
}
</script>
<style lang="scss" scoped>
</style>