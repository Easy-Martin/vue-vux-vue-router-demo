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
