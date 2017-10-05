const { createStore } = require('redux')

const auth = require('./auth')

const store = createStore(auth.reducer)
const log = () => console.log(store.getState())
log()

store.dispatch(auth.auth('asa-taka'))
log()

store.dispatch(auth.unauth())
log()

store.dispatch(auth.auth('my-name'))
log()
