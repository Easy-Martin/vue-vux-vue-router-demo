import { OVER_ITEM , REFOUND_ITEM } from '../mutation-types';
const state = {
  shop:[{
    name:'个人体检套餐A',
    hosptical:'宁波市第一人民医院',
    price:'288',
    orderNo:'1234567890123456',
    type:'0',
    imagePath:'../src/static/img/1.png',
  },
  {
    name:'个人体检套餐B',
    hosptical:'宁波市第二人民医院',
    price:'388',
    orderNo:'1234567890123456',
    type:'0',
    imagePath:'../src/static/img/2.png',
  },
  {
    name:'个人体检套餐C',
    hosptical:'宁波市第三人民医院',
    price:'388',
    orderNo:'1234567890123456',
    type:'0',
    imagePath:'../src/static/img/1.png',
  },
  {
    name:'个人体检套餐D',
    hosptical:'宁波市第四人民医院',
    price:'388',
    orderNo:'1234567890123456',
    type:'0',
    imagePath:'../src/static/img/2.png',
  }],
  refoundOrder:[],
  overOrder:[],
}
//0已付款，1未付款，2已退款，3已完成
const mutations = {
  [OVER_ITEM](state,index){
    state.shop[index].type = '3';
    state.overOrder.push(state.shop[index]);
  },
  [REFOUND_ITEM](state,index){
    state.shop[index].type = '2';
    state.refoundOrder.push(state.shop[index]);
  }
}
export default {
  state,
  mutations,
}
