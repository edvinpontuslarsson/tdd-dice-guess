'use strict'

const CustomError = require('../../src/model/CustomError')

class Controller {
    playGame(game, ui) {
        if(!game || !ui) throw new CustomError.EmptyArgumentError()

        ui.initializeView(console)

        game.rollNewDie()
    }
}

module.exports = Controller
