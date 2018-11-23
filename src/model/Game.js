'use strict'

const CustomError = require('./CustomError')

class Game {
  constructor(Die) {
    if (!Die) throw new CustomError.EmptyArgumentError()

    let totalDiceValue = 0

    this.getTotalDiceValue = () => totalDiceValue
    
    this.rollNewDie = () => {
      totalDiceValue += new Die().rollAndGetFaceValue()
    }
  }

  isGuessCorrect(guess) {
    this.validateGuess(guess)
    return guess === this.getTotalDiceValue()
  }

  validateGuess (guess) {
    if (!guess) throw new CustomError.EmptyArgumentError()
    if (!Number.isInteger(guess)) throw new CustomError.NotAnIntError()
    if (guess < 0) throw new CustomError.NegativeNumberError()
  }
}

module.exports = Game
