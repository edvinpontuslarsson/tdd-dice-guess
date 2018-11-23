'use strict'

const UserInterface = require('../../src/view/UserInterface')
const mockConsole = require('jest-mock-console').default
const ReadlineSyncStub = require('./ReadlineSyncStub')
const CustomError = require('../../src/model/CustomError')
const Game = require('../../src/model/Game')
const Die = require('../../src/model/Die')

jest.mock('./ReadlineSyncStub')

beforeEach(() => {
    ReadlineSyncStub.mockClear()
})

describe('Tests of UserInterface', () => {

    describe('Test of UserInterface constructor', () => {
        it('new UserInterface() should throw EmptyArgumentError', () => {
            expect(() => new UserInterface())
                .toThrowError(CustomError.EmptyArgumentError)
        })
    })
    
    describe('Test of displayRolledDiceAmount', () => {
        it('Looping should result in correct result every time', () => {
            const restoreConsole = mockConsole()
            const game = new Game(new Die())
            const ui = new UserInterface(game)

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
            const game = new Game(new Die())

            new UserInterface(game).displayInstructions()
            
            expect(console.log).toHaveBeenCalledWith(
                'Enter "r" to roll another die or enter an integer to guess total dice value'
            )
            restoreConsole()
        })
    })

    describe('Test of getUserInput', () => {
        it('Should call ReadlineSyncStub.question with correct question', () => {
            const readline = new ReadlineSyncStub()
            const game = new Game(new Die())

            const ui = new UserInterface(game, readline)
            ui.getUserInput()

            const mockReadline = ReadlineSyncStub.mock.instances[0]
            const mockQuestion = mockReadline.question

            expect(mockQuestion)
                .toHaveBeenCalledWith('\tWhat do you want to do?: ')
        })

        // then test that returns correct
    })

    describe('Test of displayCorrectGuess', () => {
        it('Should call console.log with correct message', () => {
            const restoreConsole = mockConsole()
            const game = new Game(new Die())

            new UserInterface(game).displayCorrectGuess()

            expect(console.log).toHaveBeenCalledWith('Correct! Congratulations!')
            restoreConsole()
        })
    })
})
