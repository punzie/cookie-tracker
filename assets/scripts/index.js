'use strict'

const authEvents = require('./auth-events.js')
const events = require('./events.js')

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.pre-sign-in').show()
  $('.signed-in').hide()
  $('#edit-cookies').hide()
  $('#delete-cookies').hide()
  $('#sign-up-form').on('submit', authEvents.onSignUp)
  $('#sign-in-form').on('submit', authEvents.onSignIn)
  $('#change-password-form').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#add-cookie-form').on('submit', events.onAddCookies)
  $('body').on('click', '.edit-button', events.onEditButton)
  $('body').on('click', '.delete-button', events.onDeleteButton)
  $('body').on('submit', '#edit-cookies-form', events.onEditCookies)
  $('body').on('submit', '#delete-cookies', events.onDeleteCookies)
})

// to-do:
// - autopopulate edit form with more than just id number (store cookie?)
// - add get cookies total (all cookies, always visible) .reduce?
// - add cookie totals per user (always number next to user?)
// - log in message greets them by screenname
//
