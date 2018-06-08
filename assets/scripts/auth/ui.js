'use strict'
const store = require('../store')

const signUpSuccess = function (signUpResponse) {
  $('#signUpModalLabel').html('You are Signed Up! Now you can Sign In! ', signUpResponse)
  $('#signUpModalLabel').css('color', 'green')
}

const signUpError = function (error) {
  $('#signUpModalLabel').html('Error. Please Try Again')
  $('#signUpModalLabel').css('color', 'red')
  console.log('SignUpError is :' + error)
}

const signInSuccess = function (response) {
  $('#signInModalLabel').html('You are Signed In! ', response)
  $('#signInModalLabel').css('color', 'green')
  store.user = response.user
}

const signInError = function (error) {
  $('#signInModalLabel').html('Error. Please Try Again')
  $('#signInModalLabel').css('color', 'red')
  console.log('SignInError is :' + error)
}

const changePasswordSuccess = function (response) {
  $('#changePasswordModalLabel').html('You have successfully change your password!', response)
  $('#changePasswordModalLabel').css('color', 'green')
}

const changePasswordError = function (error) {
  $('#changePasswordModalLabel').html('Error. Please Try Again')
  $('#changePasswordModalLabel').css('color', 'red')
  console.log('SignInError is :' + error)
}

const signOutSuccess = function (response) {
  $('#sign-out-text').html('You Have Successfully Signed Out')
  $('#sign-out-text').css('color', 'black')
  $('#signUpModalLabel').html('Sign Up')
  $('#signUpModalLabel').css('color', 'black')
  $('#signInModalLabel').html('Sign In')
  $('#signInModalLabel').css('color', 'black')
  $('#changePasswordModalLabel').html('Change Password')
  $('#changePasswordModalLabel').css('color', 'black')
  delete store.user
}

const signOutFailure = function (error) {
  $('#sign-out-text').html('Error. Trouble Signing Out')
  $('#sign-out-text').css('color', 'red')
  console.log('something went wrong: ', error)
}

module.exports = {
  signUpSuccess,
  signUpError,
  signInSuccess,
  signInError,
  changePasswordSuccess,
  changePasswordError,
  signOutSuccess,
  signOutFailure
}
