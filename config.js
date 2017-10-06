const { Map } = require('immutable')
const {
  createAction, handleActions, combineActions,
} = require('redux-actions')

// action creators

const set = createAction('SET', (key, value) => ({ key, value }))
const unset = createAction('UNSET')

const actions = {
  set, unset,
}

// reducer

const defaultState = Map()

const reducer = handleActions({
  [set]: (state, { payload: { key, value }}) => {
    return state.set(key, value)
  },
  [unset]: (state, { payload: key }) => {
    return state.delete(key)
  }
}, defaultState)

module.exports = {
  reducer, ...actions,
}
