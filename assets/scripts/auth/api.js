'use strict'
const store = require('../store')
const config = require('../config')

const signUp = function (data) {
  console.log('here', config.apiUrl)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

module.exports = {
  signUp
}
