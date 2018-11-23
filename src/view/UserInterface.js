'use strict'

class UserInterface {
    constructor (a_game) {
        
    }

    displayInstructions() {
        console.log(
            'Enter "r" to roll another die or enter an integer to guess total dice value'
        )
    }
}

module.exports = UserInterface
