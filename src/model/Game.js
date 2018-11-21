'use strict'

const CustomError = require('./CustomError')

class Game {
  isGuessCorrect (guess) {
    this.validateGuess(guess)
  }

  validateGuess(guess) {
    if (typeof guess === 'undefined') {
      throw new CustomError.EmptyArgumentError()
    }
  }
}

module.exports = Game
