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
    $('#playerTurnX').html('Loser >> Player O')
  }
}

module.exports = {
  playerXMove,
  playerOMove,
  gameDraw,
  gameWinner
}
