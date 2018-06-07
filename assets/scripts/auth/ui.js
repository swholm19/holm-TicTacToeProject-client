'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('#sign-up-form').html('You are Signed Up! ', signUpResponse)
  $('#signUpModalLabel').html('Sign Up')
  $('#signUpModalLabel').css('color', 'grey')
}

const signUpError = function (error) {
  $('#signUpModalLabel').html('Error. Please Try Again')
  $('#signUpModalLabel').css('color', 'red')
  console.log('SignUpError is :' + error)
}

const signInSuccess = function (response) {
  $('#sign-in-form').html('You are Signed In! ', response)
  $('#signInModalLabel').html('Sign Up')
  $('#signInModalLabel').css('color', 'grey')
  store.user = response.user
}

const signInError = function (error) {
  $('#signInModalLabel').html('Error. Please Try Again')
  $('#signInModalLabel').css('color', 'red')
  console.log('SignInError is :' + error)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError
}
