<style>

.weui-row {
    font-size: 14px;
    text-align: center;
    position: relative;
    border-bottom: 1px solid #ddd;
    background: #fff;
}

a:visited {
    color: #333;
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
    transition:left 0.5s ease;
}

</style>

<template>

<div class="weui-row weui-no-gutter">
    <a v-for="item in menulist" @click="targerMove($event,$index)" v-link="{path:item.path,replace: true}" class="weui-col-25" :class="{active:($index==0 )}">{{item.name}}</a>
    <span class="move"></span>
</div>

</template>

<script>
export default {
    ready() {
            let index = sessionStorage.getItem('index') || 0;
            let eles = document.querySelectorAll('.weui-col-25');
            Array.prototype.forEach.call(eles, (el) => {
                el.className = el.className.replace('active', '');
            })
            eles[index].className = eles[index].className + ' active';
        },
        data() {
            return {
                menulist: [{
                    name: '全部订单',
                    path: '/list/type'
                }, {
                    name: '待付款',
                    path: '/list/dfkdd'
                }, {
                    name: '退款单',
                    path: '/list/tkdd'
                }, {
                    name: '已完成',
                    path: '/list/ywcdd'
                }]
            }
        },
        methods: {
            targerMove: (e, index) => {
                let _this = e.target;
                let _left = _this.offsetLeft;
                let eles = document.querySelectorAll('.weui-col-25');
                let moveEle = document.querySelector('.move');
                sessionStorage.setItem('index', index);
                Array.prototype.forEach.call(eles, (el) => {
                    el.className = el.className.replace(/active/g, '');
                });
                eles[index].className = eles[index].className + ' active';
                moveEle.style.left = _left+'px';
            }
        }
}

</script>
