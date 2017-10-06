const { Map } = require('immutable')
const {
  createAction,
  handleActions,
  combineActions,
} = require('redux-actions')

// action creators

const auth = createAction('AUTH')
const unauth = createAction('UNAUTH')

const actions = {
  auth, unauth,
}

// reducer

const defaultState = {
  user: undefined,
  login: false,
}

const reducer = handleActions({
  [auth]: (state, { payload: { user } }) => ({
    user,
    login: true,
  }),
  [unauth]: (state) => ({
    user: undefined,
    login: false,
  }),
}, defaultState)

module.exports = {
  reducer, ...actions,
}
