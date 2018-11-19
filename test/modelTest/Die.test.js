'use strict'

import { assert } from 'chai'
import Die from '../../src/model/Die'

describe('Tests of Die instance', () => {
      
    describe('Tests of instantiation', () => {

        it('new Die() should be defined', done => {
            const actual = new Die()
            assert.isDefined(actual)
            done()
        })
        
        it('new Die().faceValue should be undefined since private', done => {
            const actual = new Die()._faceValue
            assert.isUndefined(actual)
            done()
        })
        
        it('new Die().getFaceValue() should be null', done => {
            const actual = new Die().getFaceValue()
            assert.isNull(actual)
            done()
        })
    })

    describe('Tests of Die.roll()', () => {

        it('die.getFaceValue() should now not be null', done => {
            const actual = getFaceValueAfterNewDieRoll()
            assert.isNotNull(actual)
            done()
        })

        it('die.getFaceValue() should now be >= 1', done => {
            const actual = getFaceValueAfterNewDieRoll()
            assert.isTrue(actual >= 1)
            done()
        })

        it('die.getFaceValue() should now be <= 6', done => {
            const actual = getFaceValueAfterNewDieRoll()
            assert.isTrue(actual <= 6)
            done()
        })

        it('1000 rolls should result in > 100 of each value', done => {
            const dieFrequencyTable = {}
            
            for (let roll = 1; roll <= 1000; roll++) {
                const dieValue = getFaceValueAfterNewDieRoll()
                const dieKey = dieValue.toString()
                dieFrequencyTable[dieKey] += 1
            }

            const actual = isEachDieValueAboveOneHundred(dieFrequencyTable)
            assert.isTrue(actual)
            done()
        })
    })
})

function getFaceValueAfterNewDieRoll() {
    const die = new Die()
    die.roll()
    return die.getFaceValue()
}

function isEachDieValueAboveOneHundred(dieFrequencyTable) {
    let answer = typeof dieFrequencyTable === 'object'
    
    Object.keys(dieFrequencyTable).forEach(key => {
        if (dieFrequencyTable[key] < 100) {
            answer = false
        }
    })

    return answer
}
