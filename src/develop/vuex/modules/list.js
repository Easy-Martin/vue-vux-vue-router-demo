import { INIT_DATA, OVER_ITEM , REFOUND_ITEM } from '../mutation-types';
const state = {
  shop:[],
  refoundOrder:[],
  overOrder:[],
}
//0已付款，1未付款，2已退款，3已完成
const mutations = {
  [INIT_DATA](state,data){
    state.shop = data;

  },
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
