'use strict'
const store = require('../store')
const gameBoardApi = require('./api.js')
const gameBoardUi = require('./ui.js')
store.gameBoardGlobal = []

const onPlayerMove = function (event) {
  if (store.gameBoardGlobal.length < 9) {
    if (store.gameBoardGlobal.length % 2 === 0) {
      gameBoardUi.playerXMove('#' + event.target.id)
      store.gameBoardGlobal.push(event.target.id)
      checkForWinner('X')
    } else {
      gameBoardUi.playerOMove('#' + event.target.id)
      store.gameBoardGlobal.push(event.target.id)
      checkForWinner()
    }
  } else {
    gameBoardUi.gameDraw()
  }
}

const checkForWinner = function (player) {
  let start
  const checkBoardArray = []
  const winningCombos = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
    ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']]

  if (player === 'X') {
    start = 0
  } else {
    start = 1
  }
  for (let i = start; i < store.gameBoardGlobal.length; i += 2) {
    checkBoardArray.push(store.gameBoardGlobal[i])
  }

  for (let n = 0; n < 8; n++) {
    if (checkBoardArray.includes(winningCombos[n][0]) &&
     checkBoardArray.includes(winningCombos[n][1]) &&
     checkBoardArray.includes(winningCombos[n][2])) {
      gameBoardUi.gameWinner(start)
    }
  }
}

module.exports = {
  onPlayerMove
}
