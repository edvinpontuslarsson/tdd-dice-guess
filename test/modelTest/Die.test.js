'use strict'

// const assert = require('chai').assert
// const Die = require('../../src/model/Die')

import '@babel/polyfill'
import { assert } from 'chai'
import Die from '../../src/model/Die'

describe('Tests of Die instance', () => {
      
    describe('Tests of instantiation', () => {

        it('new Die() should be defined', done => {
            assert.isDefined(new Die())
            done()
        })
        
        it('new Die().faceValue should be undefined since private', done => {
            assert.isUndefined(new Die()._faceValue)
            done()
        })
        
        it('new Die().getFaceValue() should be null', done => {
            assert.isNull(new Die().getFaceValue())
            done()
        })
    })
})