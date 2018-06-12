'use strict'
const store = require('../store')

const playerXMove = function (box) {
  $('#playerTurnX').html('Player X')
  $('#playerTurnO').html('Turn >> Player O')
  $('#playerTurnX').css('border', '1px solid white')
  $('#playerTurnO').css('border', '1px solid white')
  $(box).html('X')
}

const playerOMove = function (box) {
  $('#playerTurnX').html('Turn >> Player X')
  $('#playerTurnO').html('Player O')
  $('#playerTurnX').css('border', '1px solid white')
  $('#playerTurnO').css('border', '1px solid white')
  $(box).html('O')
}

const gameDraw = function () {
  $('#playerTurnX').html('Draw >> Player X')
  $('#playerTurnO').html('Draw >> Player O')
  $('#playerTurnX').css('border', '1px solid white')
  $('#playerTurnO').css('border', '1px solid white')
}

const gameWinner = function (player) {
  if (player === 0) {
    $('#playerTurnX').html('Winner >> Player X')
    $('#playerTurnO').html('Loser >> Player O')
    $('#playerTurnX').css('border', '1px solid white')
    $('#playerTurnO').css('border', '1px solid white')
  } else {
    $('#playerTurnO').html('Winner >> Player O')
    $('#playerTurnX').html('Loser >> Player X')
    $('#playerTurnX').css('border', '1px solid white')
    $('#playerTurnO').css('border', '1px solid white')
  }
}

const resetGameBoard = function () {
  $('#playerTurnX').html('Turn >> Player X')
  $('#playerTurnO').html('Player O')
  $('#playerTurnX').css('border', '1px solid white')
  $('#playerTurnO').css('border', '1px solid white')
  $('.gamebox').html('')
}

const onBoardFailure = function () {
  $('#playerTurnX').html('Unable to talk with API: Log Out and Sign Back In')
  $('#playerTurnO').html('Unable to talk with API: Log Out and Sign Back In')
  $('#playerTurnX').css('border', '1px solid red')
  $('#playerTurnO').css('border', '1px solid red')
}

const displayPlayerHistory = function () {
  $('.view3').css('display', 'inline')
}

const alreadyPlayedSpace = function () {
  if (store.gameBoardGlobal.length % 2 === 0) {
    $('#playerTurnX').css('border', '1px solid red')
    $('#playerTurnX').html('Play Another Spot >> Player X')
  } else {
    $('#playerTurnO').css('border', '1px solid red')
    $('#playerTurnO').html('Play Another Spot >> Player O')
  }
}

module.exports = {
  playerXMove,
  playerOMove,
  gameDraw,
  gameWinner,
  resetGameBoard,
  onBoardFailure,
  displayPlayerHistory,
  alreadyPlayedSpace
}
