const { Map } = require('immutable')

// action creators

const set = (key, value) => {
  const payload = { key, value }
  return { type: 'SET', payload }
}

const unset = (key) => {
  const payload = { key }
  return { type: 'UNSET', payload }
}

const actions = {
  set, unset,
}

// reducer

const initialState = Map()

const reducers = {
  SET: (state, { payload: { key, value } }) => {
    return state.set(key, value)
  },
  UNSET: (state, { payload: { key } }) => {
    return state.delete(key)
  },
}

const reducer = (state = initialState, action) => {
  const r = reducers[action.type]
  return r ? r(state, action) : state
}

module.exports = {
  reducer, ...actions,
}
