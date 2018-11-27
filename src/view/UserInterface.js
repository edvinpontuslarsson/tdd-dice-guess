'use strict'

const CustomError = require('../../src/model/CustomError')

class UserInterface {
    constructor (game, readlineSync) {
        if(!game || !readlineSync) 
            throw new CustomError.EmptyArgumentError()

        this.game = game
        let userInput

        this.getUserInput = () => {
            if(!userInput) 
                userInput = readlineSync.question('\tWhat do you want to do?: ')
            
            return userInput
        }
    }

    /**
     * @param customConsole necessary argument, 
     * can also be called with built in console 
     */
    initializeView(customConsole) {
        if(!customConsole) throw new CustomError.EmptyArgumentError()
        customConsole.clear()
    }

    displayRolledDiceAmount() {
        const amount = this.game.getRolledDiceAmount()
        console.log(`Amount of dice rolled: ${amount}`)
    }

    displayInstructions() {
        console.log(
            'Enter "r" to roll another die or ' +
            'enter a positive integer to guess total dice value'
        )
    }

    doesUserWantToRollNewDie() {
        let userInput = this.getUserInput()
        
        if(typeof userInput === 'string')
            userInput = userInput.toLowerCase()

        return userInput === 'r'
    }

    didUserGuess() {
        const userInput = this.getUserInput()
        
        if(userInput < 0) return false
        
        return Number.isInteger(userInput)
    }

    getGuess() { return this.getUserInput() }

    rectifyUser() {
        console.log('Invalid input, please try again!')
    }

    displayCorrectGuess() {
        console.log('Correct!')
    }

    displayIncorrectGuess() {
        const value = this.game.getTotalDiceValue()
        console.log(
            `Wrong! The total dice value was ${value}`
        )
    }
}

module.exports = UserInterface
