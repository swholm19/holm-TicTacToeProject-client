'use strict'
const config = require('../config')
const store = require('../store')

// Never Use this API in the game even though it is funcitonal. When is a
// user ever going to know the id of the game they are playing to be able to
// call an use this function.
const findGame = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const findAllUserGames = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  findGame,
  findAllUserGames
}
