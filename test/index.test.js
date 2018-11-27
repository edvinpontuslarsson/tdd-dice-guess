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

    it('Should call Controller constructor', () =>{
        index.run()

        const mockController = Controller.mock.instances[0]

        expect(mockController.constructor).toHaveBeenCalled()
    })

    // also test, playGame, dependency inject readline
})
