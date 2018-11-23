'use strict'

const index = require('../src/index')

describe('Smoke tests of index file', () => {
    it('index should be defined & run without errors', () => {
        index()
        expect(index).toBeDefined()
    })
})
