'use strict'
const store = require('../store')
const historyApi = require('./api.js')
const historyUi = require('./ui.js')

const onUpdatePlayerHistory = function () {
  historyApi.findGame(248)
  historyApi.findAllUserGames()
    .then(calculations)
}

const calculations = function (data) {
  console.log('calc ', data)
  const gamesPlayed = data.games.length
  console.log('gamesPlayed= ', gamesPlayed)
}

module.exports = {
  onUpdatePlayerHistory
}
