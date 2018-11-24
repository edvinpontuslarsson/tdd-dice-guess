'use strict'

const CustomError = require('../../src/model/CustomError')

class UserInterface {
    constructor (game, readlineSync) {
        if(!game || !readlineSync) 
            throw new CustomError.EmptyArgumentError()

        let userInput

        /**
         * Synchronous, stops program and waits for user input
         */
        const getUserInput = () => 
            readlineSync.question('\tWhat do you want to do?: ')

        /**
         * @param customConsole necessary argument, 
         * can also be called with built in console 
         */
        this.displayWelcomeMessage = (customConsole) => {
            customConsole.clear()
        }

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

        this.rectifyUser = () => {
            console.log('Invalid input, please try again!')
        }

        this.doesUserWantToRollNewDie = () => {
            if(!userInput) userInput = getUserInput()
            
            if(typeof userInput === 'string')
                userInput = userInput.toLowerCase()

            return userInput === 'r'
        }

        this.didUserGuess = () => {
            if(!userInput) userInput = getUserInput()
            return Number.isInteger(userInput)
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
