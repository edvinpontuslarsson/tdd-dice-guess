'use strict'

const MainController = require('../../src/controller/MainController')
const Game = require('../../src/model/Game')
const Die = require('../../src/model/Die')

jest.mock('../../src/model/Game')

beforeEach(() => {
    Game.mockClear()
})

// TODO: 
// dependency inject game & ui, make sure calls right methods
