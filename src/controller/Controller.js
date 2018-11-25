'use strict'

const CustomError = require('../../src/model/CustomError')

class Controller {
    playGame(game) {
        if(!game) throw new CustomError.EmptyArgumentError()
    }
}

module.exports = Controller
