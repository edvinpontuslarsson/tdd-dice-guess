'use strict'

class UIStub {
    constructor(returnTrue) {
        this.returnTrue = returnTrue
    }

    initializeView() { /* does nothing */ }
    displayRolledDiceAmount() { }
    displayInstructions() { }
    rectifyUser() { }
    displayCorrectGuess() { }
    displayIncorrectGuess() { }

    doesUserWantToRollNewDie() { return this.returnTrue }

    didUserGuess() { return this.returnTrue}
}

module.exports = UIStub
