'use strict'

const expect = require('chai').expect
const Game = require('../../src/model/Game')
const CustomError = require('../../src/model/CustomError')

describe('Tests of Game instance', () => {

    describe('Tests of game.isGuessCorrect()', () => {

        it('Should throw EmptyArgumentError exception if argument is given', () => {
            const game = new Game()
            expect(
                game.isGuessCorrect() // test with no argument
            ).to.throw(CustomError.EmptyArgumentError)
        })
    })
})
