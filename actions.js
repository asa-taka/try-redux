const auth = user => {
  return {
    type: 'AUTH',
    user,
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
