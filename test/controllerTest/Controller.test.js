'use strict'

const Controller = require('../../src/controller/Controller')
const CustomError = require('../../src/model/CustomError')
const Game = require('../../src/model/Game')
const Die = require('../../src/model/Die')
const UserInterface = require('../../src/view/UserInterface')
const readlineSync = require('readline-sync')
const GameStub = require('./GameStub')
const UIStub = require('./UIStub')

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

        it('Should call UserInterface.displayInstructions', () => {
            initializeControllerAndRunPlayGame()

            const mockUI = UserInterface.mock.instances[0]
            const mockDisplayInstructions = mockUI.displayInstructions

            expect(mockDisplayInstructions).toHaveBeenCalled()
        })
    })

    describe('Tests about UserInterface.doesUserWantToRollNewDie', () => {        
        it('if UserInterface.doesUserWantToRollNewDie {Should call Game.rollNewDie again}', () => {
            initializeControllerAndRunPlayGame(false, true, false, true)

            const mockGame = Game.mock.instances[0]
            const mockRollNewDie = mockGame.rollNewDie

            expect(mockRollNewDie).toHaveBeenCalledTimes(2)
        })

        it('if !UserInterface.doesUserWantToRollNewDie {Should not call Game.rollNewDie again}', () => {
            initializeControllerAndRunPlayGame(false, true)

            const mockGame = Game.mock.instances[0]
            const mockRollNewDie = mockGame.rollNewDie

            expect(mockRollNewDie).toHaveBeenCalledTimes(1)
        })
    })

    /*
    describe('Tests about UserInterface.didUserGuess', () => {
        it('if UserInterface.didUserGuess {Should call UserInterface.getGuess}')
    })
    */
})

function initializeControllerAndRunPlayGame(
    useGameStub, useUIStub, trueInGameStub, trueInUIStub
) {
    const game = useGameStub ? new GameStub(trueInGameStub) : new Game(new Die())
    const ui = useUIStub ? new UIStub(trueInUIStub) : new UserInterface(game, readlineSync)
    new Controller().playGame(game, ui)
}
