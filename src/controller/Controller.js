'use strict'

const CustomError = require('../../src/model/CustomError')

class Controller {
    playGame(game, ui) {
        if(!game || !ui) throw new CustomError.EmptyArgumentError()

        game.rollNewDie()

        ui.initializeView(console)
        ui.displayRolledDiceAmount()
        ui.displayInstructions()

        if(ui.doesUserWantToRollNewDie()) game.rollNewDie()

        if(ui.didUserGuess()) ui.getGuess()

        game.isGuessCorrect(1)
    }
}

module.exports = Controller
