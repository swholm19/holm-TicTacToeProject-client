'use strict'
const historyApi = require('./api.js')
const historyUi = require('./ui.js')

const onUpdatePlayerHistory = function () {
// Have ability to find a specifc game if you replace 248 with your game ID
// but currently do not have any funcitonality that requires this.
//  historyApi.findGame(248)
  historyApi.findAllUserGames()
    .then(historyCalculations)
    .catch(historyUi.findGamesFail)
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
    if (indGameX > indGameO & indGameX !== 0) {
      numXwon += 1
    } else if (indGameO === indGameX && indGameX !== 0) {
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
