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

// see if calls constructors

describe('Tests of index file', () => {
    it('Should call Game constructor', () => {
        index.run() // will not work now

        const mockGame = Game.mock.instances[0]

        expect(mockGame).toHaveBeenCalled()
    })
})
