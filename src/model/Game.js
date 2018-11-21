'use strict'

const CustomError = require('./CustomError')

class Game {
  constructor(Die) {
    if (!Die) throw new CustomError.EmptyArgumentError()

    this.firstDie = new Die()
    this.secondDie = new Die()
  }

  isGuessCorrect (guess) {
    this.validateGuess(guess)
  }

  validateGuess (guess) {
    if (!guess) throw new CustomError.EmptyArgumentError()
  }
}

module.exports = Game
