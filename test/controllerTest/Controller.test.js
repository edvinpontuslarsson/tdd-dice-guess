'use strict'

const Controller = require('../../src/controller/Controller')
const CustomError = require('../../src/model/CustomError')
const Game = require('../../src/model/Game')
const Die = require('../../src/model/Die')
const UserInterface = require('../../src/view/UserInterface')
const readlineSync = require('readline-sync')

jest.mock('../../src/model/Game')
jest.mock('../../src/view/UserInterface')

beforeEach(() => {
    Game.mockClear()
    UserInterface.mockClear()
})

describe('Tests of playGame method in Controller instance', () => {

    describe('Tests of error throwing playGame', () => {
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

    describe('Tests that needed methods gets called', () => {
        it('Should call Game.rollNewDie', () => {
            initializeControllerAndRunPlayGame()

            const mockGame = Game.mock.instances[0]
            const mockRollNewDie = mockGame.rollNewDie

            expect(mockRollNewDie).toHaveBeenCalled()
        })
        
        it('Should call UserInterface.initializeView with console', () => {
            initializeControllerAndRunPlayGame()

            const mockUI = UserInterface.mock.instances[0]
            const mockInitializeView = mockUI.initializeView

            expect(mockInitializeView)
                .toHaveBeenCalledWith(console)
        })

        it('Should call UserInterface.displayRolledDiceAmount', () => {
            initializeControllerAndRunPlayGame()

            const mockUI = UserInterface.mock.instances[0]
            const mockDisplayRolledDiceAmount = mockUI.displayRolledDiceAmount

            expect(mockDisplayRolledDiceAmount).toHaveBeenCalled()
        })
    })
})

function initializeControllerAndRunPlayGame() {
    const game = new Game(new Die())
    const ui = new UserInterface(game, readlineSync)
    new Controller().playGame(game, ui)
}
