'use strict'

const CustomError = require('../../src/model/CustomError')

class Controller {
    playGame(game, ui) {
        if(!game || !ui) throw new CustomError.EmptyArgumentError()

        game.rollNewDie()

        ui.initializeView(console)
        ui.displayRolledDiceAmount()
        ui.displayInstructions()

        // TODO: put in if stmnts & test if stmnts
        ui.doesUserWantToRollNewDie()
    }
}

module.exports = Controller
