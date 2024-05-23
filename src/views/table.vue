<template>
  <o-data-table  ref="Table"></o-data-table>
</template>

<script setup>
import {useDataTable,ODataTable} from '@oceancode/ocean-wui'
const Table = useDataTable({
  columns: [
    {
      title: '登录账号',
      key: 'username',
      align:'right',
      resizable:true
    },
    {
      title: '昵称',
      key:'nickname'
    },
    {
      title: '年龄',
      key:'age'
    },
    {
      title:'住址',
      key:'address'
    },
    {
      title:'时间',
      key:'timestamp',
      traits:['timestamp']
    },
    {
      title:'img',
      key:'img',
      traits:['img']
    },
    {
      title:'状态',
      key:'status',
      traits:['status'],
      onClick(row,value){
        console.log(row,value)
        return Promise.resolve()
      }
    },
    {
      title:'type',
      key:'type',
      dict:[
        {label:'A',value:'a'}
      ],
      traits:['tag']
    },
    {
      title:'操作',
      type: 'action',
      actions:[
        {
          type:'edit'
        },
        {
          type:'add',
          text:'Add'
        },
        {
          type:'other',
          text:'Other',
          events:['open']
        },
        {
          type:'delete',
          onClick(row){
            console.log(row)
          }
        }
      ]
    }
  ],
  on: {
    load(params){
      const list = []
      for(let i = 0;i<2;i++){
        list.push({
          username:'A'+i,
          nickname:'A'+i,
          timestamp:1715172640509,
          img: 'https://show.cool-admin.com/api/public/uploads/20240125/57d6a9ebae7e4d7485a4129a2aa0beb8_a.webp',
          age: 1000%i,
          status: i%2==0 ? true : false,
          type:'a'
        })
      }
      console.log('=====load',params)
      return Promise.resolve(list)
    }
  }
})
</script>