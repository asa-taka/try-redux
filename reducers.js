const { Map } = require('immutable')

const initialState = Map({
  user: undefined,
  login: false,
})

const authReducers = {
  AUTH: (state, { user }) => {
    return state.merge({ user, login: true })
  },
  UNAUTH: (state) => {
    return state.merge({ user: undefined, login: false })
  },
}

const auth = (state = initialState, action) => {
  const reducer = authReducers[action.type]
  return reducer ? reducer(state, action) : state
}

module.exports = {
  auth,
}
