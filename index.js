const { createStore, combineReducers } = require('redux')

const auth = require('./auth')
const config = require('./config')

const reducer = combineReducers({
  auth: auth.reducer,
  config: config.reducer,
})

const store = createStore(reducer)
const log = () => console.log(store.getState())
log()

store.dispatch(auth.auth('asa-taka'))
log()

store.dispatch(auth.unauth())
log()

store.dispatch(auth.auth('my-name'))
log()

store.dispatch(config.set('k1', 'v1'))
log()

store.dispatch(config.set('k2', 'v2'))
log()

store.dispatch(config.unset('k1'))
log()
