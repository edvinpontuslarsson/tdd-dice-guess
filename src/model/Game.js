'use strict'

const CustomError = require('./CustomError')

class Game {
  constructor(Die) {
    if (!Die) throw new CustomError.EmptyArgumentError()
    this.Die = Die
  }

  rollNewDie() {
    const die = new this.Die()
  }

  isGuessCorrect(guess) {
    this.validateGuess(guess)
  }

  validateGuess (guess) {
    if (!guess) throw new CustomError.EmptyArgumentError()
    if (!Number.isInteger(guess)) throw new CustomError.NotAnIntError()
    if (guess < 0) throw new CustomError.NegativeNumberError()
  }
}

module.exports = Game
