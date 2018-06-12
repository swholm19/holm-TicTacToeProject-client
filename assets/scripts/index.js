'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const authEvents = require('./auth/events')
const boardEvents = require('./gameBoard/events')
const historyEvents = require('./gameHistory/events')

$(() => {
  // The below 4 lines of code are the event handlers for all authentication
  // queries.
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePW)
  $('#sign-out').on('click', authEvents.onSignOut)

  // The below line of code is event handlers to listen if the gameboard
  // has been clicked.
  $('.gamebox').on('click', boardEvents.onPlayerMove)

  $('#resetGame').on('click', boardEvents.onReset)

  $('#playerHistory').on('click', historyEvents.onUpdatePlayerHistory)
})
