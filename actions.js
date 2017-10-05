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

module.exports = {
  auth,
  unauth,
}
