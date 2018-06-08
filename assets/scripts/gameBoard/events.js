'use strict'
const store = require('../store')
const gameBoardApi = require('./api.js')
const gameBoardUi = require('./ui.js')

store.gameBoardGlobal = []

const storeApiGameBoard = function (data) {
  console.log('create data: ', data)
  store.apiGameBoard = data
}

const onCreateBoard = function () {
  gameBoardApi.createBoard()
    .then(storeApiGameBoard)
    .catch(console.log('There was an error in creating board'))
}

const onPlayerMove = function (event) {
  if (store.gameBoardGlobal.length === 0) {
    onCreateBoard()
  }

  if (store.gameBoardGlobal.length < 8) {
    if (!store.gameBoardGlobal.includes(event.target.id.toString())) {
      if (store.gameBoardGlobal.length % 2 === 0) {
        gameBoardUi.playerXMove('#' + event.target.id)
        store.gameBoardGlobal.push(event.target.id)
        gameBoardApi.updateBoard([store.gameBoardGlobal.length - 1, 'x', false])
        checkForWinner('x')
      } else {
        gameBoardUi.playerOMove('#' + event.target.id)
        store.gameBoardGlobal.push(event.target.id)
        gameBoardApi.updateBoard([store.gameBoardGlobal.length - 1, 'o', false])
        checkForWinner('o')
      }
    } else {
      console.log('Number has already been played')
    }
  } else {
    gameBoardUi.playerXMove('#' + event.target.id)
    gameBoardUi.gameDraw()
  }
}

const checkForWinner = function (player) {
  let start
  const checkBoardArray = []
  const winningCombos = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'],
    ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']]

  if (player === 'x') {
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
      gameBoardApi.updateBoard([store.gameBoardGlobal.length - 1, player, true])
    }
  }
}

module.exports = {
  onPlayerMove,
  onCreateBoard
}
