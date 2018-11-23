'use strict'

const index = require('../../src/index')

describe('Smoke tests of index file', () => {
    it('index.run() should be defined & run without errors', () => {
        index.run()
        expect(index.run).toBeDefined()
    })
})
