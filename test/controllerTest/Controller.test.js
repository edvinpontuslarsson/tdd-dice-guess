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
        it('if user wants to roll new die, should roll one die', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.doesUserWantToRollNewDie = getFunctionThatReturns(true)

            new Controller().playGame(game, ui)
            
            const mockGame = Game.mock.instances[0]
            const mockRollNewDie = mockGame.rollNewDie
            
            expect(mockRollNewDie).toHaveBeenCalledTimes(1)
        })

        it('if !UserInterface.doesUserWantToRollNewDie {Should not call Game.rollNewDie again}', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.doesUserWantToRollNewDie = getFunctionThatReturns(false)

            new Controller().playGame(game, ui)
            
            const mockGame = Game.mock.instances[0]
            const mockRollNewDie = mockGame.rollNewDie

            expect(mockRollNewDie).not.toHaveBeenCalledTimes(1)
        })
    })
    
    describe('Tests about UserInterface.didUserGuess', () => {
        it('if UserInterface.didUserGuess {Should call UserInterface.getGuess}', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)
            
            ui.didUserGuess = getFunctionThatReturns(true)

            new Controller().playGame(game, ui)

            const mockUI = UserInterface.mock.instances[0]
            const mockGetGuess = mockUI.getGuess

            expect(mockGetGuess).toHaveBeenCalled()
        })

        it('if !UserInterface.didUserGuess {Should not call UserInterface.getGuess}', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)
            
            ui.didUserGuess = getFunctionThatReturns(false)

            new Controller().playGame(game, ui)  
            
            const mockUI = UserInterface.mock.instances[0]
            const mockGetGuess = mockUI.getGuess

            expect(mockGetGuess).not.toHaveBeenCalled()
        })
    })

    describe('Tests about Game.isGuessCorrect', () => {
        it('Looping test, should call with right number each time', () => {
            const game = new Game(new Die())

            const mockGame = Game.mock.instances[0]
            const mockIsGameCorrect = mockGame.isGuessCorrect

            for (let guess = 1; guess <= 10; guess += 1) {
                const ui = new UserInterface(game, readlineSync)

                ui.didUserGuess = getFunctionThatReturns(true)
                ui.getGuess = getFunctionThatReturns(guess)

                new Controller().playGame(game, ui)

                expect(mockIsGameCorrect)
                    .toHaveBeenCalledWith(guess)
            }
        })

        it('Should not call if user did not guess', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.didUserGuess = getFunctionThatReturns(false)

            new Controller().playGame(game, ui)

            const mockGame = Game.mock.instances[0]
            const mockIsGameCorrect = mockGame.isGuessCorrect

            expect(mockIsGameCorrect)
                .not.toHaveBeenCalled()
        })
    })

    describe('Tests about UserInterface.displayCorrectGuess', () => {
        it('Should call if guess is correct', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.didUserGuess = getFunctionThatReturns(true)
            game.isGuessCorrect = getFunctionThatReturns(true)
            
            new Controller().playGame(game, ui)

            const mockUI = UserInterface.mock.instances[0]
            const mockDisplayCorrectGuess = mockUI.displayCorrectGuess

            expect(mockDisplayCorrectGuess).toHaveBeenCalled()
        })

        it('Should not call if guess is incorrect', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.didUserGuess = getFunctionThatReturns(true)
            game.isGuessCorrect = getFunctionThatReturns(false)

            new Controller().playGame(game, ui)

            const mockUI = UserInterface.mock.instances[0]
            const mockDisplayCorrectGuess = mockUI.displayCorrectGuess

            expect(mockDisplayCorrectGuess)
                .not.toHaveBeenCalled()
        })
    })

    describe('Tests about UserInterface.displayIncorrectGuess', () => {
        it('Should call if guess is incorrect', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.didUserGuess = getFunctionThatReturns(true)
            game.isGuessCorrect = getFunctionThatReturns(false)

            new Controller().playGame(game, ui)

            const mockUI = UserInterface.mock.instances[0]
            const mockDisplayIncorrectGuess = mockUI.displayIncorrectGuess

            expect(mockDisplayIncorrectGuess).toHaveBeenCalled()
        })

        it('Should not call if guess is correct', () => {
            const game = new Game(new Die())
            const ui = new UserInterface(game, readlineSync)

            ui.didUserGuess = getFunctionThatReturns(true)
            game.isGuessCorrect = getFunctionThatReturns(true)

            new Controller().playGame(game, ui)

            const mockUI = UserInterface.mock.instances[0]
            const mockDisplayIncorrectGuess = mockUI.displayIncorrectGuess

            expect(mockDisplayIncorrectGuess)
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
