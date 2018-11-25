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
            initializeControllerAndRunPlayGame(Game, UserInterface)

            const mockGame = Game.mock.instances[0]
            const mockRollNewDie = mockGame.rollNewDie

            expect(mockRollNewDie).toHaveBeenCalled()
        })
        
        it('Should call UserInterface.initializeView with console', () => {
            initializeControllerAndRunPlayGame(Game, UserInterface)

            const mockUI = UserInterface.mock.instances[0]
            const mockInitializeView = mockUI.initializeView

            expect(mockInitializeView)
                .toHaveBeenCalledWith(console)
        })

        it('Should call UserInterface.displayRolledDiceAmount', () => {
            initializeControllerAndRunPlayGame(Game, UserInterface)

            const mockUI = UserInterface.mock.instances[0]
            const mockDisplayRolledDiceAmount = mockUI.displayRolledDiceAmount

            expect(mockDisplayRolledDiceAmount).toHaveBeenCalled()
        })

        it('Should call UserInterface.displayInstructions', () => {
            initializeControllerAndRunPlayGame(Game, UserInterface)

            const mockUI = UserInterface.mock.instances[0]
            const mockDisplayInstructions = mockUI.displayInstructions

            expect(mockDisplayInstructions).toHaveBeenCalled()
        })

        it('Should call UserInterface.doesUserWantToRollNewDie', () => {
            initializeControllerAndRunPlayGame(Game, UserInterface)

            const mockUI = UserInterface.mock.instances[0]
            const mockdoesUserWantToRollNewDie = mockUI.doesUserWantToRollNewDie

            expect(mockdoesUserWantToRollNewDie).toHaveBeenCalled()
        })
        /*
        it('if UserInterface.doesUserWantToRollNewDie {Should call Game.rollNewDie}', () => {
            initializeControllerAndRunPlayGame(Game, UserInterface)

            const mockGame = Game.mock.instances[0]
            const mockRollNewDie = mockGame.rollNewDie

            

            expect(mockRollNewDie).toHaveBeenCalled()
        })
        */
        // if false, should call, if true, should not

        // https://stackoverflow.com/questions/45758366/how-to-change-jest-mock-function-return-value-in-each-test
    })
})

function initializeControllerAndRunPlayGame(Game, UI) {
    const game = new Game(new Die())
    const ui = new UI(game, readlineSync)
    new Controller().playGame(game, ui)
}
