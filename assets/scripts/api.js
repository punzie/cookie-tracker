'use strict'

const config = require('./config.js')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}

const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addCookies = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/cookies',
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getCookies = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/cookies',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const editCookies = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/cookies/' + data.cookie.id,
    data: data,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteCookies = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/cookies/' + data.cookie.id,
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  addCookies,
  getCookies,
  editCookies,
  deleteCookies
}
