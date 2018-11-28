'use strict'

const CustomError = require('./CustomError')

class Game {
  constructor(die) {
    if (!die) throw new CustomError.EmptyArgumentError()

    this.die = die
    this.rolledDiceAmount = 0
    this.totalDiceValue = 0
  }

  getRolledDiceAmount() { return this.rolledDiceAmount }

  getTotalDiceValue() { return this.totalDiceValue }

  rollNewDie() {
    this.rolledDiceAmount += 1
    this.totalDiceValue += this.die.rollAndGetFaceValue()
  }

  resetGame() {
    this.rolledDiceAmount = 0
    this.totalDiceValue = 0
  }

  isGuessCorrect(guess) {
    this.validateGuess(guess)
    return guess === this.totalDiceValue
  }

  validateGuess(guess) {
    if (guess === undefined) throw new CustomError.EmptyArgumentError()
    if (!Number.isInteger(guess)) throw new CustomError.NotAnIntError()
    if (guess < 0) throw new CustomError.NegativeNumberError()
  }
}

module.exports = Game
