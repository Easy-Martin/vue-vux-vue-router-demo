<style media="screen">
  .weui_btn_blue {
    background-color: #36a7ff;
  }
  .weui_btn_blue:not(.weui_btn_disabled):visited {
    color: #FFFFFF;
  }
  .weui_btn_blue:not(.weui_btn_disabled):active {
    color: rgba(255, 255, 255, 0.4);
    background-color: #2a8ad5;
  }

    .weui-row {
      font-size: 14px;
      text-align: center;
      position: relative;
      border-bottom: 1px solid #ddd;
      background: #fff;
    }
    .weui_media_box.weui_media_appmsg .weui_media_hd {
      width:80px;
    }
    .weui_media_desc{
      padding-top:4px;
    }
    .weui_panel_hd{
      font-size:14px;
    }
    .weui_panel_hd p{
      padding-top:4px;
      color:#333;
    }
    .heizi{
      color:#333;
    }
    .footbuy{

      padding:15px;
    }

</style>
<template>
  <div class="weui_panel weui_panel_access">
    <div class="weui_panel_hd">订单号：1234567890123 <span style="float:right;color:#ff4830">已预定</span></div>
  </div>

  <div class="weui_panel weui_panel_access">
    <div class="weui_panel_bd">
      <a href="javascript:void(0);" class="weui_media_box weui_media_appmsg">
        <div class="weui_media_hd">
          <img class="weui_media_appmsg_thumb" :src="imgUrl" alt="">
        </div>
        <div class="weui_media_bd">
          <h4 class="weui_media_title">个人体检套餐B</h4>
          <p class="weui_media_desc">￥388/人</p>
          <p class="weui_media_desc">宁波市第一人民医院</p>
        </div>
      </a>
    </div>
      <div class="weui_panel_hd heizi">黄京京 </div>
      <div class="weui_panel_hd heizi">联系方式：18621775589 </div>
      <div class="weui_panel_hd heizi">体检价格：388元 </div>
      <div class="weui_panel_hd heizi">体检医院：宁波市第一人民医院 </div>
      <div class="weui_panel_hd heizi">体检日期：2016-06-29 </div>
  </div>
  <div class="weui_panel weui_panel_access">
    <div class="weui_panel_hd">注意事项</div>
    <div class="weui_panel_bd">
      <div class="weui_media_box weui_media_text" style="font-size:14px;">
        预约体检日期当天有效。
      </div>

    </div>
  </div>
  <div class="footbuy">
      <a style="font-size:14px;" href="javascript:;" class="weui_btn weui_btn_blue">取消预约</a>
  </div>
</template>
<script>
  module.exports = {
    data:function(){
      return {
        imgUrl:'../src/static/img/2.png',
      }
    }
  }
</script>
