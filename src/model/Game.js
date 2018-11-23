'use strict'

const CustomError = require('./CustomError')

class Game {
  constructor(die) {
    if (!die) throw new CustomError.EmptyArgumentError()

    let rolledDiceAmount = 0
    let totalDiceValue = 0

    this.getRolledDiceAmount = () => rolledDiceAmount
    this.getTotalDiceValue = () => totalDiceValue
    
    this.rollNewDie = () => {
      rolledDiceAmount += 1
      totalDiceValue += die.rollAndGetFaceValue()
    }

    this.resetGame = () => {
      rolledDiceAmount = 0
      totalDiceValue = 0
    }

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
