'use strict'

const CustomError = require('./CustomError')

class Game {
  constructor(Die) {
    if (!Die) throw new CustomError.EmptyArgumentError()

    let rolledDiceAmount = 0
    let totalDiceValue = 0

    this.getRolledDiceAmount = () => rolledDiceAmount
    this.getTotalDiceValue = () => totalDiceValue
    
    this.rollNewDie = () => {
      rolledDiceAmount += 1
      totalDiceValue += new Die().rollAndGetFaceValue()
    }

    this.resetTotalDiceValue = () => { totalDiceValue = 0 }

    this.isGuessCorrect = guess => {
      this.validateGuess(guess)
      return guess === totalDiceValue
    }

    this.validateGuess = guess => {
      if (!guess) throw new CustomError.EmptyArgumentError()
      if (!Number.isInteger(guess)) throw new CustomError.NotAnIntError()
      if (guess < 0) throw new CustomError.NegativeNumberError()
    }
  }
}

module.exports = Game
