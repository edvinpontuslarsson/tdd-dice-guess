'use strict'

const index = require('../src/index')
const Game = require('../src/model/Game')
const Die = require('../src/model/Die')
const UserInterface = require('../src/view/UserInterface')
const readlineSync = require('readline-sync')

jest.mock('../src/model/Game')
jest.mock('../src/view/UserInterface')

beforeEach(() => {
    Game.mockClear()
    UserInterface.mockClear()
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
})
