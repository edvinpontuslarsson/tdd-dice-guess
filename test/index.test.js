'use strict'

const index = require('../src/index')
const Game = require('../src/model/Game')
const Die = require('../src/model/Die')
const UserInterface = require('../src/view/UserInterface')
const Controller = require('../src/controller/Controller')
const ReadlineStub = require('./viewTest/ReadlineSyncStub')

const readlineStub = new ReadlineStub()

jest.mock('../src/model/Game')
jest.mock('../src/view/UserInterface')
jest.mock('../src/controller/Controller')

beforeEach(() => {
    Game.mockClear()
    UserInterface.mockClear()
    Controller.mockClear()
})

describe('Tests of index file', () => {
    it('Should call Game constructor 10 times here', () => {
        index.run(readlineStub)

        const mockGame = Game.mock.instances[0]

        expect(mockGame.constructor).toHaveBeenCalled()
    })

    it('Should call UserInterface constructor', () => {
        index.run(readlineStub)

        const mockUI = UserInterface.mock.instances[0]

        expect(mockUI.constructor).toHaveBeenCalled()
    })

    it('Should call Controller constructor', () => {
        index.run(readlineStub)

        const mockController = Controller.mock.instances[0]

        expect(mockController.constructor).toHaveBeenCalled()
    })

    it('Should call Controller.playGame', () => {
        index.run(readlineStub)

        const mockController = Controller.mock.instances[0]
        const mockPlayGame = mockController.playGame

        expect(mockPlayGame).toHaveBeenCalled()
    })
})

