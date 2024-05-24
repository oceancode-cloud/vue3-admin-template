<template>
  <!-- <page-context>
    home
  </page-context> -->
  <div>
    <o-button type="info">{{ $t('user.add') }}</o-button>
    <o-add-button type="info" v-if="$checkPermission(['user:add'])"></o-add-button>
    <n-button @click="handlePing">ping</n-button>
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
import { getCurrentInstance } from 'vue'
const { proxy } = getCurrentInstance() as any
console.log(proxy)
const inputVal = ref(2)
import {ping} from '@/services'

function handlePing(){
  ping().then(data=>console.log(data))
}
</script>