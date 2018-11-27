'use strict'

const CustomError = require('../../src/model/CustomError')

class Controller {
    playGame(game, ui) {
        if (!game || !ui) throw new CustomError.EmptyArgumentError()

        ui.initializeView(console)
        ui.displayRolledDiceAmount()
        ui.displayInstructions()

        if (ui.doesUserWantToRollNewDie()) game.rollNewDie()

        if (ui.didUserGuess()) {
            const guess = ui.getGuess()
            game.isGuessCorrect(guess)
        }

        ui.displayCorrectGuess()
    }
}

module.exports = Controller
