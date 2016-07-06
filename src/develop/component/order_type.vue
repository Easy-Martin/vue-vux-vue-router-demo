<style media="screen">
.weui_cells{
  font-size:15px;
}
.weui_cell img{
  width:35px;
  vertical-align:middle;
  padding-right:10px;
}
</style>
<template>
  <div class="weui_panel">
  <div class="weui_panel_bd">
    <div class="weui_media_box weui_media_small_appmsg">
      <div class="weui_cells weui_cells_access">
        <a v-for="item in orderList" class="weui_cell" v-link="{ path:item.path }">
          <div class="weui_cell_hd"><img :src="item.icon"></div>
          <div class="weui_cell_bd weui_cell_primary">
            <p>{{item.name}}</p>
          </div>
          <span class="weui_cell_ft"></span>
        </a>
      </div>
    </div>
  </div>
</div>
</template>
<script>
import { initData } from '../vuex/actions';
export default {
  data(){
    return {
      orderList:[{
        name:'在线预约',
        path:'/yylist',
        icon:'../src/static/img/c.png'
      },
      {
        name:'居民缴费',
        path:'/yylist',
        icon:'../src/static/img/b.png'
      },
      {
        name:'网上支付',
        path:'/yylist',
        icon:'../src/static/img/a.png'
      }]
    }
  },
  vuex:{
    actions:{
      initData,
    }
  },
  ready(){
    this.initData()
  }
}
</script>
