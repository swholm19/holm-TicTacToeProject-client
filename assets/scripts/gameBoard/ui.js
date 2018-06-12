'use strict'

const playerXMove = function (box) {
  $('#playerTurnX').html('Player X')
  $('#playerTurnO').html('Turn >> Player O')
  $(box).html('X')
}

const playerOMove = function (box) {
  $('#playerTurnX').html('Turn >> Player X')
  $('#playerTurnO').html('Player O')
  $(box).html('O')
}

const gameDraw = function () {
  $('#playerTurnX').html('Draw >> Player X')
  $('#playerTurnO').html('Draw >> Player O')
}

const gameWinner = function (player) {
  if (player === 0) {
    $('#playerTurnX').html('Winner >> Player X')
    $('#playerTurnO').html('Loser >> Player O')
  } else {
    $('#playerTurnO').html('Winner >> Player O')
    $('#playerTurnX').html('Loser >> Player X')
  }
}

const resetGameBoard = function () {
  $('#playerTurnX').html('Turn >> Player X')
  $('#playerTurnO').html('Player O')
  $('.gamebox').html('')
  $('#xTotalWins').html('Total X Wins: ')
  $('#oTotalWins').html('Total O Wins: ')
  $('#totalGames').html('Total Games Played: ')
  $('#tieGames').html('Total Games Tied: ')
  $('#onGoingGames').html('Total Unfinished Games: ')
}

const createBoardFailure = function (error) {
  console.log('Unable to create board: ', error)
}

const displayPlayerHistory = function () {
  $('.view3').css('display', 'inline')
}

module.exports = {
  playerXMove,
  playerOMove,
  gameDraw,
  gameWinner,
  resetGameBoard,
  createBoardFailure,
  displayPlayerHistory
}
