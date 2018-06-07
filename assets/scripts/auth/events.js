'use strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const authUi = require('./ui.js')
const authApi = require('./api.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('data is: ', data)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpError)
}

const onSignIn = function () {}

const onChangePW = function () {}

const onSignOut = function () {}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePW,
  onSignOut
}
