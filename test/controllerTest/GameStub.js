'use strict'

class GameStub {
    constructor(isTrue) {
        this.isTrue = isTrue
    }

    rollNewDie() { /* does nothing */ }

    resetGame() { }

    isGuessCorrect() { return this.isTrue }
}

module.exports = GameStub
