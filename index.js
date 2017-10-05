const { createStore } = require('redux')

const { auth } = require('./reducers')
const actions = require('./actions')

const store = createStore(auth)
const log = () => console.log(store.getState())
log()

store.dispatch(actions.auth('asa-taka'))
log()

store.dispatch(actions.unauth())
log()

store.dispatch(actions.auth('my-name'))
log()
