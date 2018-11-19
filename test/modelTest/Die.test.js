'use strict'

import { assert } from 'chai'
import Die from '../../src/model/Die'

describe('Tests of Die instance', () => {
      
    describe('Tests of instantiation', () => {

        it('new Die() should be defined', () => {
            const actual = new Die()
            assert.isDefined(actual)
        })
        
        it('new Die()._faceValue should be undefined since private', () => {
            const actual = new Die()._faceValue
            assert.isUndefined(actual)
        })
        
        it('new Die().getFaceValue() should be null', () => {
            const actual = new Die().getFaceValue()
            assert.isNull(actual)
        })
    })

    describe('Tests after calling Die.roll()', () => {

        it('die.getFaceValue() should now not be null', () => {
            const actual = getFaceValueAfterNewDieRoll()
            assert.isNotNull(actual)
        })

        it('die.getFaceValue() should now return >= 1', () => {
            for (let x = 1; x <= 100; x++) {
                const actual = getFaceValueAfterNewDieRoll()
                assert.isTrue(actual >= 1)
            }
            
        })

        it('die.getFaceValue() should now return <= 6', () => {        
            for (let x = 1; x <= 100; x++) {
                const actual = getFaceValueAfterNewDieRoll()
                assert.isTrue(actual <= 6)
            }

        })

        it('1000 rolls should result in > 100 of each value', () => {
            const dieFrequencyTable = {}
            
            for (let roll = 1; roll <= 1000; roll++) {
                const dieValue = getFaceValueAfterNewDieRoll()
                const dieKey = dieValue.toString()
                dieFrequencyTable[dieKey] += 1
            }

            const actual = isEachDieValueAboveOneHundred(dieFrequencyTable)
            assert.isTrue(actual)
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
