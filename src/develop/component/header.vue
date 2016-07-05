<style>
.weui-row{
  font-size:14px;
  text-align:center;
  position: relative;
  border-bottom:1px solid #ddd;
  background:#fff;
}
a:visited{
  color:#333;
}
.weui-row .weui-col-25{
  padding:10px 0;
}
.weui-row .active{
  color:#36a7ff;
}
.move{
  position: absolute;
  width:25%;
  height:2px;
  background:#36a7ff;
  bottom:0;
  left:0;
}
</style>
<template>
  <div class="weui-row weui-no-gutter">
    <a v-for="item in menulist" @click="targerMove" v-link="{path:item.path,replace: true}" class="weui-col-25" :class="{active:($index==0 )}">{{item.name}}</a>
    <span class="move"></span>
  </div>
</template>
<script>
  var $ = require('jquery');
  module.exports = {
    ready:function(){
      var index = sessionStorage.getItem('index')||0;
      $('.weui-col-25').eq(index).addClass('active').siblings('a').removeClass('active');
      $('.move').css('left',$('.weui-col-25').eq(index).offset().left);
    },
    data:function(){
      return {
        menulist:[{name:'全部订单',path:'/list/type'},{name:'待付款',path:'/list/dfkdd'},{name:'退款单',path:'/list/tkdd'},{name:'已完成',path:'/list/ywcdd'}]
      }
    },
    methods:{
      targerMove:function(e){
        var _this = e.target;
        var _left = $(_this).offset().left;
        var index = $(_this).index();
        sessionStorage.setItem('index',index);
        $(_this).addClass('active').siblings('a').removeClass('active');
        $('.move').animate({left: _left}, 'fast');
      }
    }
  }
</script>
