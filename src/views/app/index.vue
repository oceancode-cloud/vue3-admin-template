<template>
  <o-grid :options="listUserProject" :item-width="290">
    <template #default="{option}">
      <o-card :height="100">
        <template #header>
          {{ option.name }}
        </template>
        {{ option.desc }}
      </o-card>
    </template>
  </o-grid>
</template>
<script setup>
import { ref} from 'vue'
import { listUserProject } from '@/services'

const appList = [
  {
    title:'SpringBoot',
    id: 1
  },
  {
    title:'Vue3',
    id:2
  },
  {
    title:'Uniapp',
    id:3
  },
  {
    title:'Golang',
    id: 4
  }
]
</script>