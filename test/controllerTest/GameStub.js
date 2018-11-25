'use strict'

class GameStub {
    constructor(returnTrue) {
        this.returnTrue = returnTrue
    }

    rollNewDie() { /* does nothing */ }

    resetGame() { }

    isGuessCorrect() { return this.returnTrue }
}

module.exports = GameStub
