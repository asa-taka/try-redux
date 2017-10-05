const initialState = {
  user: undefined,
  login: false,
}

const authReducers = {
  AUTH: (state, { user }) => {
    return {
      ...state,
      user,
      login: true,
    }
  },
  UNAUTH: (state, { user }) => {
    return {
      ...state,
      user,
      login: false,
    }
  },
}

const auth = (state = initialState, action) => {
  const reducer = authReducers[action.type]
  return reducer ? reducer(state, action) : state
}

module.exports = {
  auth,
}
