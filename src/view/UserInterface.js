'use strict'

class UserInterface {
    constructor (game) {
        this.displayRolledDiceAmount = () => {
            const amount = game.getRolledDiceAmount()
            console.log(`Amount of dice rolled: ${amount}`)
        }
    }

    displayInstructions() {
        console.log(
            'Enter "r" to roll another die or enter an integer to guess total dice value'
        )
    }
}

module.exports = UserInterface
