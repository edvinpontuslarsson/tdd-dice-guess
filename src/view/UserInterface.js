'use strict'

const CustomError = require('../../src/model/CustomError')

class UserInterface {
    constructor (game, readline) {
        if(!game) throw new CustomError.EmptyArgumentError()

        let userInput

        const getUserInput = () => 
            readline.question('\tWhat do you want to do?: ')

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
            // hmm, this line is not really tested
            if(!userInput) userInput = getUserInput()

            return userInput.toLowerCase() === 'r'
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
    }
}

module.exports = UserInterface
