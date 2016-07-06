// export const overItem = makeAction('OVER_ITEM')
// export const refundItem = makeAction('REFOUND_ITEM')
//
// function makeAction (type) {
//   return ({ dispatch }, ...args) => dispatch(type, ...args)
// }
// export function overItem({dispatch},...args){
//   dispatch('OVER_ITEM',...args)
// }
//
// export function refundItem({dispatch},...args){
//   dispatch('REFOUND_ITEM',...args)
// }
export const overItem = ({dispatch},...args) =>{
  return dispatch('OVER_ITEM',...args);
}
export const refundItem = ({dispatch},...args) =>{
  return dispatch('REFOUND_ITEM',...args);
}
export const initData = ({dispatch},...args) =>{
  let data = [{
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
  }];
  setTimeout(()=>{
    return dispatch('INIT_DATA',data);
  },2000)

}
