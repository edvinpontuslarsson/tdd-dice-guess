'use strict'

import { expect } from 'chai'
import Die from '../../src/model/Die'

describe('Tests of Die instance', () => {
      
    describe('Tests of instantiation', () => {

        it('new Die() should be defined', () => {
            expect(
                new Die()
            )
                .to.not.be.undefined
        })
        
        it('new Die()._faceValue should be undefined since private', () => {
            expect(
                new Die()._faceValue
            )
                .to.be.undefined
        })
        
        it('new Die().getFaceValue() should be null', () => {
            expect(
                new Die().getFaceValue()
            )
                .to.be.null
        })
    })

    describe('Tests after calling Die.roll()', () => {

        it('die.getFaceValue() should now not be null', () => {
            expect(
                getFaceValueAfterNewDieRoll()
            )
                .to.not.be.null
        })

        it('die.getFaceValue() should now return a value between 1 & 6', () => {
            for (let x = 1; x <= 100; x++) {
                expect(
                    getFaceValueAfterNewDieRoll()
                )
                    .to.be.within(1, 6)
            }
        })

        it('1000 rolls should result in > 100 of each value', () => {
            const dieFrequencyTable = {}
            
            for (let roll = 1; roll <= 1000; roll++) {
                const dieValue = getFaceValueAfterNewDieRoll()
                const dieKey = dieValue.toString()
                dieFrequencyTable[dieKey] += 1
            }

            expect(
                isEachDieValueAboveOneHundred(dieFrequencyTable)
            )
                .to.be.true
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
