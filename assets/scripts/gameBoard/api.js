'use strict'
const config = require('../config')
const store = require('../store')

const createBoard = function () {
  console.log('here')
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    data: {},
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateBoard = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games/' + data.id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createBoard,
  updateBoard
}
