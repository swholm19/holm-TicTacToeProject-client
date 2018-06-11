'use strict'
const config = require('../config')
const store = require('../store')

const findGame = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/books/' + id
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  findGame
}
