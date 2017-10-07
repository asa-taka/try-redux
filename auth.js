const { Map } = require('immutable')
const {
  createActions, handleActions, combineActions,
} = require('redux-actions')

// action creators

const identityActions = ['AUTH', 'UNAUTH']

const actions = createActions({}, ...identityActions)

// reducer

const defaultState = Map({
  user: undefined,
  login: false,
})

const reducer = handleActions({
  [actions.auth]: (state, { payload: user }) => state.merge({
    user,
    login: true,
  }),
  [actions.unauth]: (state) => state.merge({
    user: undefined,
    login: false,
  }),
}, defaultState)

module.exports = {
  reducer, ...actions,
}
