'use strict'

const Die = require('../../src/model/Die')

describe('Tests of Die instance', () => {
  describe('Tests of rollAndGetFaceValue()', () => {
    it('rollAndGetFaceValue() should return a value between 1 & 6', () => {
      for (let x = 1; x <= 100; x++) {
        expect(new Die().rollAndGetFaceValue())
          .toBeGreaterThanOrEqual(1)

        expect(new Die().rollAndGetFaceValue())
          .toBeLessThanOrEqual(6)
      }
    })

    it('1000 rolls should result in > 100 of each value', () => {
      const dieFrequencyTable = {}

      for (let roll = 1; roll <= 1000; roll++) {
        const dieValue = new Die().rollAndGetFaceValue()
        const dieKey = dieValue.toString()
        dieFrequencyTable[dieKey] += 1
      }

      expect(isEachDieValueAboveOneHundred(dieFrequencyTable))
        .toBeTruthy()
    })
  })
})

function isEachDieValueAboveOneHundred (dieFrequencyTable) {
  let answer = typeof dieFrequencyTable === 'object'

  Object.keys(dieFrequencyTable).forEach(key => {
    if (dieFrequencyTable[key] < 100) {
      answer = false
    }
  })

  return answer
}
