'use strict'

const assert = require('chai').assert
const Die = require('../../src/model/Die')

// https://devhints.io/chai

describe('Test of Die instance', () => {
    describe('Tests that Die can be instantiated', () => {
        it('new Die() should be defined', done => {
            assert.isDefined(new Die())
            done()
        })
    })
})