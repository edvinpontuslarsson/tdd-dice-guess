'use strict'

const isProduction = require('../src/isProduction')

describe('Test of isProduction', () => {
    it('Should return true', () => {
        expect(isProduction()).toBeTruthy()
    })
})
