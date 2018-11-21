'use strict'

const CustomError = require('./CustomError')

class Game {
  constructor(die) {
    if (!die) throw new CustomError.EmptyArgumentError()


  }

  isGuessCorrect (guess) {
    this.validateGuess(guess)
  }

  validateGuess (guess) {
    if (!guess) throw new CustomError.EmptyArgumentError()
  }
}

module.exports = Game
