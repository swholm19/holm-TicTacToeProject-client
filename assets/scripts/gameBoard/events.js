'use strict'
const store = require('../store')
const gameApi = require('./api.js')
const gameBoardUi = require('./ui.js')
const gameHistoryEvent = require('../gameHistory/events.js')

store.gameBoardGlobal = []

const storeApiGame = function (data) {
  store.apiGame = data
  onGameLogic()
}

const onReset = function () {
  gameBoardUi.resetGameBoard()
  gameHistoryEvent.onUpdatePlayerHistory()
  store.gameBoardGlobal = []
  store.apiGame = null
  store.playerPosition = null
}

const onCreateBoard = function () {
  gameApi.createBoard()
    .then(storeApiGame)
    .catch(gameBoardUi.onBoardFailure)
  gameBoardUi.displayPlayerHistory()
}

const onUpdateGameData = function (data) {
  store.apiGame = data
}

const onGameLogic = function () {
  if (store.apiGame.game.over === false) {
    if (store.gameBoardGlobal.length < 8) {
      if (!store.gameBoardGlobal.includes(store.playerPosition.toString())) {
        if (store.gameBoardGlobal.length % 2 === 0) {
          gameBoardUi.playerXMove('#' + store.playerPosition)
          store.gameBoardGlobal.push(store.playerPosition)
          const didWin = checkForWinner('x')
          if (didWin) {
            gameApi.updateBoard([store.playerPosition - 1, 'x', false])
              .then(onUpdateGameData)
              .catch(gameBoardUi.onBoardFailure)
          }
        } else {
          gameBoardUi.playerOMove('#' + store.playerPosition)
          store.gameBoardGlobal.push(store.playerPosition)
          const didWin = checkForWinner('o')
          if (didWin) {
            gameApi.updateBoard([store.playerPosition - 1, 'o', false])
              .then(onUpdateGameData)
              .catch(gameBoardUi.onBoardFailure)
          }
        }
      } else {
        gameBoardUi.alreadyPlayedSpace()
      }
    } else if (store.gameBoardGlobal.length === 8) {
      gameBoardUi.playerXMove('#' + store.playerPosition)
      store.gameBoardGlobal.push(store.playerPosition)
      const didWin = checkForWinner('x')
      if (didWin) {
        gameApi.updateBoard([store.playerPosition - 1, 'x', false])
          .then(onUpdateGameData)
          .catch(gameBoardUi.onBoardFailure)
        gameBoardUi.gameDraw()
      }
    }
  }
}

const onPlayerMove = function (event) {
  store.playerPosition = event.target.id
  if (store.gameBoardGlobal.length === 0) {
    onCreateBoard()
  } else {
    onGameLogic()
  }
}

const checkForWinner = function (player) {
  let start = null
  const checkBoardArray = []
  const winningCombos = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9'], ['1', '4', '7'], ['2', '5', '8'], ['3', '6', '9'], ['1', '5', '9'], ['3', '5', '7']]

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
      gameApi.updateBoard([store.playerPosition - 1, player, true])
        .then(onUpdateGameData)
        .catch(gameBoardUi.onBoardFailure)
      return false
    }
  }
  return true
}

module.exports = {
  onPlayerMove,
  onCreateBoard,
  onReset
}
