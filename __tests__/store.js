const createStore = require('../store')
const auth = require('../auth')
const config = require('../config')

describe('store', () => {

  describe('auth', () => {

    test('a scenario', () => {

      const store = createStore()
      const state = () => store.getState()
      console.log(state())

      store.dispatch(auth.auth('my-name'))
      expect(state().auth.user).toEqual('my-name')
      expect(state().auth.login).toEqual(true)
      console.log(state())

      store.dispatch(auth.unauth())
      expect(state().auth.user).toBeUndefined()
      console.log(state())
    })
  })

  describe('config', () => {

    test('a scenario', () => {

      const store = createStore()
      const state = () => store.getState()

      store.dispatch(config.set('k1', 100))
      expect(state().config.get('k1')).toEqual(100)

      store.dispatch(config.set('k2', 200))
      expect(state().config.get('k2')).toEqual(200)

      store.dispatch(config.unset('k1'))
      expect(state().config.get('k1')).toBeUndefined()
    })
  })
})
