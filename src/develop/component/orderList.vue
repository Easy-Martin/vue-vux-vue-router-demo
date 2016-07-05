
<template>
  <menu></menu>
  <router-view></router-view>
</template>
<script>
  import header from './header.vue';
  export default {
    name:'orderList',
    components:{
      menu:header,
    }
  }
</script>
