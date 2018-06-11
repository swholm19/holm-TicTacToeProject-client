'use strict'
const store = require('../store')
const historyApi = require('./api.js')
const historyUi = require('./ui.js')

const onUpdatePlayerHistory = function () {
  historyApi.findGame(248)
  historyApi.findAllUserGames()
    .then(historyCalculations)
}

const historyCalculations = function (data) {
  const games = data.games
  historyUi.updateUserName(games[0].player_x.email)
  historyUi.totalGames(games.length)
  numTieGames(games)
  numGamesNotFinished(games)
  numGamesWon(games)
}

const numGamesWon = function (games) {
  console.log('Games: ', games)
  let numXwon = 0
  let numOwon = 0
  for (let i = 0; i < games.length; i++) {
    let indGameX = 0
    let indGameO = 0
    if (games[i].over === true) {
      for (let n = 0; n < games[i].cells.length; n++) {
        if (games[i].cells[n] === 'x') {
          indGameX += 1
        } else if (games[i].cells[n] === 'o') {
          indGameO += 1
        }
      }
    }
    if (indGameX > indGameO) {
      numXwon += 1
    } else if (indGameO > indGameX) {
      numOwon += 1
    }
  }
  historyUi.showXandOWinners(numXwon, numOwon)
}

const numGamesNotFinished = function (games) {
  let numOnGoingGames = 0
  for (let i = 0; i < games.length; i++) {
    if (games[i].over === false && games[i].cells.includes('')) {
      numOnGoingGames += 1
    }
  }
  historyUi.showOnGoingGames(numOnGoingGames)
}

const numTieGames = function (games) {
  let numDraws = 0
  for (let i = 0; i < games.length; i++) {
    if (games[i].over === false && !games[i].cells.includes('')) {
      numDraws += 1
    }
  }
  historyUi.showTieGames(numDraws)
}

module.exports = {
  onUpdatePlayerHistory
}
