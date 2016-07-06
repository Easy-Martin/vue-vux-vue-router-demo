<style media="screen">

.weui_media_box.weui_media_appmsg .weui_media_hd {
    width: 80px;
}

.weui_media_desc {
    padding-top: 4px;
}

.weui-row {
    font-size: 14px;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #ddd;
    background: #fff;
}

.weui-row .weui-col-25 {
    padding: 10px 0;
}

.weui-row .active {
    color: #36a7ff;
}

.move {
    position: absolute;
    width: 25%;
    height: 2px;
    background: #36a7ff;
    bottom: 0;
    left: 0;
}

</style>

<template>

<div class="weui_panel weui_panel_access">
    <a v-link="{ name:'yymsg', params: { orederId: 123 }}" class="weui_panel_ft" href="javascript:void(0);">订单号：1234567890123456</a>
    <div class="weui_panel_bd">
        <a href="javascript:" class="weui_media_box weui_media_appmsg" style="background:#f1f1f1">
            <div class="weui_media_hd">
                <img class="weui_media_appmsg_thumb" :src="imgUrl" alt="">
            </div>
            <div class="weui_media_bd">
                <h4 class="weui_media_title">个人体检套餐A</h4>
                <p class="weui_media_desc">￥288/人</p>
                <p class="weui_media_desc">宁波市第一人民医院</p>
            </div>
        </a>
    </div>
    <div class="weui_panel_hd" style="overflow:hidden;zoom:1">
        <span style="float:left;color:#ff4830">单价：288元</span>
        <a href="javascript:;" style="float:right;font-size:12px;border-color:#36a7ff;color:#36a7ff" class="weui_btn weui_btn_mini weui_btn_plain_primary">取消预约</a>
    </div>
</div>

</template>

<script>

module.exports = {
    data: function() {
        return {
            imgUrl: '../src/static/img/1.png',
        }
    },
    route: {
        activate: function(transition) {
            console.log(transition.to.path);
            transition.next();
        },
        data: function(transition) {
            transition.next();
        },
        deactivate: function(transition) {
            transition.next();
        }
    },
}

</script>
