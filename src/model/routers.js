
module.exports = function(router) {
  router.map({
    '/list': {
      component: function(resolve) {
        require(['../develop/component/orderList.vue'], resolve);
      },
      subRoutes:{
        '/type':{
          component: function(resolve) {
            require(['../develop/component/order_type.vue'], resolve);
          }
        },
        '/tkdd': {
          component: function(resolve) {
            require(['../develop/component/tkdd.vue'], resolve);
          }
        },
        '/dfkdd': {
          component: function(resolve) {
            require(['../develop/component/dfkdd.vue'], resolve);
          }
        },
        '/ywcdd': {
          component: function(resolve) {
            require(['../develop/component/ywcdd.vue'], resolve);
          }
        },
      }
    },
    '/yylist': {
      component: function(resolve) {
        require(['../develop/component/yy_order.vue'], resolve);
      }
    },
    '/yymsg/:orederId': {
      name: 'yymsg',
      component: function(resolve) {
        require(['../develop/component/yy_order_msg.vue'], resolve);
      }
    }
  })
}
