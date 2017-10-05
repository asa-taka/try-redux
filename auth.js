const { Map } = require('immutable')

// action creators

const auth = user => {
  return {
    type: 'AUTH',
    payload: { user },
  }
}

const unauth = () => {
  return {
    type: 'UNAUTH',
  }
}

const actions = {
  auth, unauth,
}

// reducer

const initialState = Map({
  user: undefined,
  login: false,
})

const reducers = {
  AUTH: (state, { payload: { user } }) => {
    return state.merge({ user, login: true })
  },
  UNAUTH: (state) => {
    return state.merge({ user: undefined, login: false })
  },
}

const reducer = (state = initialState, action) => {
  const r = reducers[action.type]
  return r ? r(state, action) : state
}

module.exports = {
  reducer, ...actions,
}
