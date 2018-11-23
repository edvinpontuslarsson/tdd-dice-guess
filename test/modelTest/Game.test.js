'use strict'

const Game = require('../../src/model/Game')
const CustomError = require('../../src/model/CustomError')
const Die = require('../../src/model/Die')
const DieStubModule = require('./DieStub')
const DieStub = DieStubModule.DieStub
const resetDieStubFaceValue = DieStubModule.resetFaceValue

jest.mock('../../src/model/Die') // makes Die mock instance

beforeEach(() => {
  Die.mockClear()
})

describe('Tests of Game instance', () => {
  describe('Tests of Game constructor', () => {
    it('new Game() should throw EmptyArgumentError', () => {
      expect(() => new Game())
        .toThrowError(CustomError.EmptyArgumentError)
    })
  })

  describe('Tests of rollNewDie', () => {
    it('rollNewDie() should construct Die', () => {
      const game = new Game(Die).rollNewDie()
      expect(Die).toHaveBeenCalled()
    })
    it('rollNewDie() should call Die.rollAndGetFaceValue()', () => {
      const game = new Game(Die).rollNewDie()

      const mockDie = Die.mock.instances[0]
      const mockRollAndGetFaceValue = mockDie.rollAndGetFaceValue

      expect(mockRollAndGetFaceValue).toHaveBeenCalled()
    })
  })

  describe('Tests of rollNewDie and getTotalDiceValue', () => {
    it('Should result in correct number every time, based on stub', () => {
      resetDieStubFaceValue()
      const game = new Game(DieStub)

      let sum = 0

      for (let x = 1; x < 5; x += 1) {
        sum += x
        game.rollNewDie()
        const value = game.getTotalDiceValue()
        expect(value).toBe(sum)
      }
    })
  })

  describe('Tests of isGuessCorrect', () => {
    it('looping isGuessCorrect(x) should return true every time', () => {
      resetDieStubFaceValue()
      const game = new Game(DieStub)
      
      let sum = 0
      
      for (let x = 1; x < 5; x += 1) {
        sum += x
        game.rollNewDie()
        expect(game.isGuessCorrect(sum)).toBe(true)
      }
    })

    it('isGuessCorrect(2) should return false', () => {
      resetDieStubFaceValue()
      const game = new Game(DieStub)
      expect(game.isGuessCorrect(2)).toBe(false)
    })

    it('isGuessCorrect should reset total dice value for next round', () => {
      resetDieStubFaceValue()
      const game = new Game(DieStub)
      
      game.rollNewDie()
      expect(game.getTotalDiceValue()).toBe(1)
      expect(game.isGuessCorrect(1)).toBe(true)

      expect(game.getTotalDiceValue()).toBe(0)
    })
  })

  describe('Tests that isGuessCorrect throws errors correctly', () => {
    it('calling without arguments should throw EmptyArgumentError', () => {
      expect(() => new Game(Die).isGuessCorrect())
        .toThrowError(CustomError.EmptyArgumentError)
    })
    it('calling with 1.5 or "5" should throw NotAnIntError', () => {
      expect(() => new Game(Die).isGuessCorrect(1.5))
        .toThrowError(CustomError.NotAnIntError)

      expect(() => new Game(Die).isGuessCorrect("5"))
        .toThrowError(CustomError.NotAnIntError)
    })
    it('calling with -1 should throw NegativeNumberError', () => {
      expect(() => new Game(Die).isGuessCorrect(-1))
        .toThrowError(CustomError.NegativeNumberError)
    })
  })
})
