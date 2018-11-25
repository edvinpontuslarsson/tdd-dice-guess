'use strict'

const Controller = require('../../src/controller/Controller')
const CustomError = require('../../src/model/CustomError')
const Game = require('../../src/model/Game')
const Die = require('../../src/model/Die')
const UserInterface = require('../../src/view/UserInterface')
const ReadlineSyncStub = require('../viewTest/ReadlineSyncStub')

describe('Tests of Controller instance', () => {

    // should throw empty arg errs, mock & call
    describe('Tests of playGame', () => {
        it('new Controller().playGame() should throw EmptyArgumentError', () => {
            expect(() => new Controller().playGame())
                .toThrowError(CustomError.EmptyArgumentError)
        })

        it('Should throw throw EmptyArgumentError if only 1 argument is provided', () => {
            const game = new Game(new Die())
            expect(() => new Controller().playGame(game))
                .toThrowError(CustomError.EmptyArgumentError)
        })
    })
})
