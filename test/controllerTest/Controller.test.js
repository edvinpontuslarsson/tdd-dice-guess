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

        it('Should call UserInterface.displayInstructions', () => {
            initializeControllerAndRunPlayGame()

            const mockUI = UserInterface.mock.instances[0]
            const mockDisplayInstructions = mockUI.displayInstructions

            expect(mockDisplayInstructions).toHaveBeenCalled()
        })
    })

    
    describe('Tests about UserInterface.doesUserWantToRollNewDie', () => {        
        it('if UserInterface.doesUserWantToRollNewDie {Should call Game.rollNewDie again}', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.doesUserWantToRollNewDie = getFunctionThatReturns(true)

            new Controller().playGame(game, ui)

            const mockGame = Game.mock.instances[0]
            const mockRollNewDie = mockGame.rollNewDie

            expect(mockRollNewDie).toHaveBeenCalledTimes(2)
        })

        it('if !UserInterface.doesUserWantToRollNewDie {Should not call Game.rollNewDie again}', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.doesUserWantToRollNewDie = getFunctionThatReturns(false)

            new Controller().playGame(game, ui)

            const mockGame = Game.mock.instances[0]
            const mockRollNewDie = mockGame.rollNewDie

            expect(mockRollNewDie).toHaveBeenCalledTimes(1)
        })
    })
    
    describe('Tests about UserInterface.didUserGuess', () => {
        it('if UserInterface.didUserGuess {Should call UserInterface.getGuess}', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)
            
            ui.didUserGuess = getFunctionThatReturns(true)

            new Controller().playGame(game, ui)            

            expect(ui.getGuess).toHaveBeenCalled()
        })

        it('if !UserInterface.didUserGuess {Should not call UserInterface.getGuess}', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)
            
            ui.didUserGuess = getFunctionThatReturns(false)

            new Controller().playGame(game, ui)            

            expect(ui.getGuess).not.toHaveBeenCalled()
        })
    })

    describe('Tests about Game.isGuessCorrect', () => {
        it('Looping test, should call with right number each time', () => {
            for (let guess = 1; guess <= 10; guess += 1) {
                const game = new Game(new Die())
                const ui = new UserInterface(game, readlineSync)

                ui.didUserGuess = getFunctionThatReturns(true)
                ui.getGuess = getFunctionThatReturns(guess)

                new Controller().playGame(game, ui)

                expect(game.isGuessCorrect)
                    .toHaveBeenCalledWith(guess)
            }
        })

        it('Should not call if user did not guess', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.didUserGuess = getFunctionThatReturns(false)

            new Controller().playGame(game, ui)

            expect(game.isGuessCorrect)
                .not.toHaveBeenCalled()
        })
    })
})

function initializeControllerAndRunPlayGame() {
    const game = new Game(new Die())
    const ui = new UserInterface(game, readlineSync)
    new Controller().playGame(game, ui)
}

function getFunctionThatReturns(something) {
    return () => something
}
