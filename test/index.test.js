'use strict'

const index = require('../src/index')
const Game = require('../src/model/Game')
const Die = require('../src/model/Die')

describe('Smoke tests of index file', () => {
    it('index should be defined & run without errors', () => {
        index()
        expect(index).toBeDefined()
    })
})

// mock game, see if constructs, should make game


