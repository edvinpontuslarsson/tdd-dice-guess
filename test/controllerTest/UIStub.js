'use strict'

class UIStub {
    constructor(isTrue) {
        this.isTrue = isTrue
    }

    initializeView() { /* does nothing */ }
    displayRolledDiceAmount() { }
    displayInstructions() { }
    rectifyUser() { }
    displayCorrectGuess() { }
    displayIncorrectGuess() { }

    doesUserWantToRollNewDie() { return this.isTrue }

    didUserGuess() { return this.isTrue}

    getGuess() { return 1 }
}

module.exports = UIStub
