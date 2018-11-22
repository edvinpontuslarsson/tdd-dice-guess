'use strict'

const CustomError = require('./CustomError')

let totalDiceValue = 0

class Game {
  constructor(Die) {
    if (!Die) throw new CustomError.EmptyArgumentError()
    this.Die = Die
  }

  getTotalDiceValue() {
    return totalDiceValue
  }

  rollNewDie() {
    totalDiceValue = new this.Die().rollAndGetFaceValue()
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
