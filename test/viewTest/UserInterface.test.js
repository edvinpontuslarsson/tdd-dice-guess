'use strict'

const UI = require('../../src/view/UserInterface')
const mockConsole = require('jest-mock-console').default
const Game = require('../../src/model/Game')
const Die = require('../../src/model/Die')

// start with welcome message
describe('Tests of UserInterface', () => {

    describe('Test of displayRolledDiceAmount', () => {
        it('Looping should result in correct result every time', () => {
            const restoreConsole = mockConsole()
            const game = new Game(Die)
            const ui = new UI(game)

            for(let amount = 1; amount < 5; amount += 1) {
                game.rollNewDie()
                ui.displayRolledDiceAmount()
                
                expect(console.log).toHaveBeenCalledWith(
                    `Amount of dice rolled: ${amount}`
                )
            }
            restoreConsole()
        })
    })

    describe('Test of displayInstructions', () => {
        it('Should call console.log with correct message', () => {
            const restoreConsole = mockConsole()
            const game = new Game(Die)

            new UI(game).displayInstructions()
            
            expect(console.log).toHaveBeenCalledWith(
                'Enter "r" to roll another die or enter an integer to guess total dice value'
            )
            restoreConsole()
        })
    })
})
