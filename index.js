const createStore = require('./store')
const auth = require('./auth')
const config = require('./config')

const store = createStore()

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
