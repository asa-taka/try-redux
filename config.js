const { Map } = require('immutable')
const {
  createActions, handleActions, combineActions,
} = require('redux-actions')

// action creators

const identityActions = ['UNSET']

const actions = createActions({
  SET: (key, value) => ({ key, value })
}, ...identityActions)

// reducer

const defaultState = Map()

const reducer = handleActions({
  [actions.set]: (state, { payload: { key, value }}) => {
    return state.set(key, value)
  },
  [actions.unset]: (state, { payload: key }) => {
    return state.delete(key)
  }
}, defaultState)

module.exports = {
  reducer, ...actions,
}
