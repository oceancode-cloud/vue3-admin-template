<template>
  <!-- <page-context>
    home
  </page-context> -->
  <div>
    <o-button type="info">按钮</o-button>
    <o-collapse :options="[{title:'A',key:'a'}]">dsf</o-collapse>
    <o-segment-button :options="[{label:'A',key:'a'},{label:'B',key:'b'}]"></o-segment-button>
    <o-username-icon></o-username-icon>
    inputVal:{{inputVal}}
    <o-input v-model="inputVal"></o-input>
    <FormCom></FormCom>
    <TableCom></TableCom>
  </div>
</template>

<script setup lang="ts">
import { OButton,OCollapse,OSegmentButton,OUsernameIcon,OInput } from '@oceancode/ocean-wui'
import { ref } from 'vue'
import FormCom from './form.vue'
import TableCom from './table.vue'
const inputVal = ref(2)
</script>