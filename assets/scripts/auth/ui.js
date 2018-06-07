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

module.exports = {
  signUpSuccess,
  signUpError
}
