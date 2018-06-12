'use strict'

const updateUserName = function (email) {
  $('#usernameHistory').html('Username: ' + email)
  $('#playerHistory').css('border', '1px solid white')
  $('#playerHistoryText').html('Click Here to Display Player Stats')
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

const findGamesFail = function () {
  $('#playerHistory').css('border', '1px solid red')
  $('#playerHistoryText').html('Issue connecting with API. Log out and Sign Back In')
}

module.exports = {
  updateUserName,
  totalGames,
  showTieGames,
  showOnGoingGames,
  showXandOWinners,
  findGamesFail
}
