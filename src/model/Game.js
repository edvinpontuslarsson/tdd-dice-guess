'use strict'

const CustomError = require('./CustomError')

class Game {
  constructor(Die) {
    if (!Die) throw new CustomError.EmptyArgumentError()

    this.firstDie = new Die()
    this.secondDie = new Die()

    this.firstDie.roll()
    this.secondDie.roll()
  }

  isGuessCorrect(guess) {
    this.validateGuess(guess)
  }

  isGuessTooLow() {
    if (!this.guess) throw new CustomError.NoGuessError()
  }

  validateGuess (guess) {
    if (!guess) throw new CustomError.EmptyArgumentError()
    if (!Number.isInteger(guess)) throw new CustomError.NotAnIntError()
    if (guess < 0) throw new CustomError.NegativeNumberError()
  }
}

module.exports = Game
