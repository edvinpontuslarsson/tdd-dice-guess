'use strict'

const index = require('../src/index')
const Game = require('../src/model/Game')
const Die = require('../src/model/Die')
const UserInterface = require('../src/view/UserInterface')
const Controller = require('../src/controller/Controller')
const readlineStub = require('./viewTest/ReadlineSyncStub')

jest.mock('../src/model/Game')
jest.mock('../src/view/UserInterface')
jest.mock('../src/controller/Controller')

beforeEach(() => {
    Game.mockClear()
    UserInterface.mockClear()
    Controller.mockClear()
})

describe('Tests of index file', () => {
    it('Should call Game constructor', () => {
        index.run()

        const mockGame = Game.mock.instances[0]

        expect(mockGame.constructor).toHaveBeenCalled()
    })

    it('Should call UserInterface constructor', () => {
        index.run()

        const mockUI = UserInterface.mock.instances[0]

        expect(mockUI.constructor).toHaveBeenCalled()
    })

    it('Should call Controller constructor', () => {
        index.run()

        const mockController = Controller.mock.instances[0]

        expect(mockController.constructor).toHaveBeenCalled()
    })

    it('Should call Controller.playGame', () => {
        index.run()

        const mockController = Controller.mock.instances[0]
        const mockPlayGame = mockController.playGame

        expect(mockPlayGame).toHaveBeenCalled()
    })

    it('Should call Controller.playGame with game & ui instances', () => {
        const readlineStub = new readlineStub()
        
        index.run(readlineStub) // dependency injected because original stops thread

        const mockController = Controller.mock.instances[0]
        const mockPlayGame = mockController.playGame

        const gameInstance = new Game(new Die)
        const uiInstance = new UserInterface(gameInstance, readlineStub)

        expect(mockPlayGame).toHaveBeenCalledWith(gameInstance, uiInstance)
    })
})
