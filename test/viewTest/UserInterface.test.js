'use strict'

const UI = require('../../src/view/UserInterface')
const mockConsole = require('jest-mock-console').default
const Game = require('../../src/model/Game')
const Die = require('../../src/model/Die')

// start with welcome message
describe('Tests of UserInterface', () => {

    describe('Test of displayInstructions', () => {
        it('Should call console.log with correct message', () => {
            const restoreConsole = mockConsole()
            
            const game = new Game(Die)
            new UI(game).displayInstructions()
            
            expect(console.log)
                .toHaveBeenCalledWith(
                    'Enter "r" to roll another die or enter an integer to guess total dice value'
                )
            restoreConsole()
        })
    })
})
