'use strict'

class EmptyArgumentError extends Error {}

class NotAnIntError extends Error {}

class NegativeNumberError extends Error {}

class NoGuessError extends Error {}

module.exports = {
  EmptyArgumentError,
  NotAnIntError,
  NegativeNumberError,
  NoGuessError
}
