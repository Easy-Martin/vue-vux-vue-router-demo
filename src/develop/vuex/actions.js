export const overItem = makeAction('OVER_ITEM')
export const refundItem = makeAction('REFOUND_ITEM')

function makeAction (type) {
  return ({ dispatch }, ...args) => dispatch(type, ...args)
}
