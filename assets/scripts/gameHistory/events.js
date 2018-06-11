'use strict'
const store = require('../store')
const historyApi = require('./api.js')
const historyUi = require('./ui.js')

const onUpdatePlayerHistory = function () {
  console.log('history')
  historyApi.findGame()
}

module.exports = {
  onUpdatePlayerHistory
}
