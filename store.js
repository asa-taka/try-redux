const { createStore, combineReducers } = require('redux')

const auth = require('./auth')
const config = require('./config')

const reducer = combineReducers({
  auth: auth.reducer,
  config: config.reducer,
})

// export factory
module.exports = () => createStore(reducer)
