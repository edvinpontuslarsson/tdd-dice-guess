'use strict'

const CustomError = require('../../src/model/CustomError')

class UserInterface {
    constructor (game, readline) {
        if(!game) throw new CustomError.EmptyArgumentError()

        let userInput

        this.displayRolledDiceAmount = () => {
            const amount = game.getRolledDiceAmount()
            console.log(`Amount of dice rolled: ${amount}`)
        }

        this.displayInstructions = () => {
            console.log(
                'Enter "r" to roll another die or ' +
                'enter an integer to guess total dice value'
            )
        }

        this.doesUserWantToRollNewDie = () => {
            // how should I test this?
            // if(!userInput) userInput = this.getUserInput() // see below, make getUserInput private

            // Warning! getUserInput stops and listens, change this implementation
            return this.getUserInput().toLowerCase() === 'r'
        }

        this.displayCorrectGuess = () => {
            console.log('Correct! Congratulations!')
        }

        this.displayIncorrectGuess = () => {
            const value = game.getTotalDiceValue()
            console.log(
                `Wrong! The total dice value was ${value}`
            )
        }

        // should be private
        this.getUserInput = () => 
            readline.question('\tWhat do you want to do?: ')
    }
}

module.exports = UserInterface
