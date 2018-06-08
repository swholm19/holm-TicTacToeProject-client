'use strict'
const config = require('../config')
const store = require('../store')

const createBoard = function () {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBoard = function (dataArray) {
  console.log('update function: ', dataArray)
  console.log('timing: ', store.apiGameBoard)
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + store.apiGameBoard.game.id,
    data: {
      'game': {
        'cell': {
          'index': dataArray[0],
          'value': dataArray[1]
        },
        'over': dataArray[2]
      }
    },
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createBoard,
  updateBoard
}
