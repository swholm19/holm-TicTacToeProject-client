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
  $('#playerTurnX').html('Turn >> Player X')
  $('#playerTurnO').html('Player O')
  $('.view1').css('display', 'none')
  $('.view2').css('display', 'inline')
  $('#usernameHistory').html('Username: ')
  $('#xTotalWins').html('Total X Wins: ')
  $('#oTotalWins').html('Total O Wins: ')
  $('#totalGames').html('Total Games Played: ')
  $('#tieGames').html('Total Games Tied: ')
  $('#onGoingGames').html('Total Unfinished Games: ')
  store.user = response.user
}

const signInError = function () {
  $('#signInModalLabel').html('Error. Please Try Again')
  $('#signInModalLabel').css('color', 'red')
}

const changePasswordSuccess = function (response) {
  $('#changePasswordModalLabel').html('You have successfully change your password!', response)
  $('#changePasswordModalLabel').css('color', 'green')
}

const changePasswordError = function () {
  $('#changePasswordModalLabel').html('Error. Please Try Again')
  $('#changePasswordModalLabel').css('color', 'red')
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
  $('#usernameHistory').html('Username: ')
  $('#xTotalWins').html('Total X Wins: ')
  $('#oTotalWins').html('Total O Wins: ')
  $('#totalGames').html('Total Games Played: ')
  $('#tieGames').html('Total Games Tied: ')
  $('#onGoingGames').html('Total Unfinished Games: ')
  $('.view1').css('display', 'block')
  $('.view2').css('display', 'none')
  $('.view3').css('display', 'none')
  delete store.user
}

const signOutFailure = function () {
  $('#sign-out-text').html('Error. Trouble Signing Out')
  $('#sign-out-text').css('color', 'red')
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
