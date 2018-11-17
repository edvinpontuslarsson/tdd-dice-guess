'use strict'

// const assert = require('chai').assert
// const Die = require('../../src/model/Die')

import '@babel/polyfill'
import { assert } from 'chai'
import Die from '../../src/model/Die'

describe('Test of Die instance', () => {
    describe('Tests that Die can be instantiated', () => {
        it('new Die() should be defined', done => {
            assert.isDefined(new Die())
            done()
        })
    })

    describe('Tests of Die.faceValue', () => {
        it('new Die().getFaceValue() should be null', done => {
            assert.isNull(new Die().getFaceValue())
            done()
        })
    })
})