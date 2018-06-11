'use strict'
const store = require('../store')

const updateUserName = function (email) {
  $('#usernameHistory').html('Username: ' + email)
}

const totalGames = function (numAllGames) {
  $('#totalGames').html('Total Games Played: ' + numAllGames)
}

const showTieGames = function (numTies) {
  $('#tieGames').html('Total Games Tied: ' + numTies)
}

const showOnGoingGames = function (onGoingGames) {
  $('#onGoingGames').html('Total Unfinished Games: ' + onGoingGames)
}

const showXandOWinners = function (xWins, oWins) {
  $('#xTotalWins').html('Total X Wins: ' + xWins)
  $('#oTotalWins').html('Total O Wins: ' + oWins)
}

module.exports = {
  updateUserName,
  totalGames,
  showTieGames,
  showOnGoingGames,
  showXandOWinners
}
