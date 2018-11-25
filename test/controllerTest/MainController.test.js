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
    })
})
