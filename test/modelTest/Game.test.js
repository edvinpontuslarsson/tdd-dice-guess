'use strict'

const Game = require('../../src/model/Game')
const CustomError = require('../../src/model/CustomError')
const Die = require('../../src/model/Die')
const DieStubModule = require('./DieStub')
const DieStub = DieStubModule.DieStub
const resetDieStubFaceValue = DieStubModule.resetFaceValue

jest.mock('../../src/model/Die')

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
    it('rollNewDie() should call Die.rollAndGetFaceValue()', () => {
      const die = new Die()
      new Game(die).rollNewDie()

      const mockDie = Die.mock.instances[0]
      const mockRollAndGetFaceValue = mockDie.rollAndGetFaceValue

      expect(mockRollAndGetFaceValue).toHaveBeenCalled()
    })
  })

  describe('Tests of getRolledDiceAmount', () => {
    it('looping getRolledDiceAmount should return correct amount every time', () => {
      const die = new Die()
      const game = new Game(die)

      for (let amount = 1; amount < 5; amount += 1) {
        game.rollNewDie()
        expect(game.getRolledDiceAmount()).toBe(amount)
      }
    })
  })

  describe('Tests of rollNewDie and getTotalDiceValue', () => {
    it('Loop should result in correct number every time, based on stub', () => {
      resetDieStubFaceValue()
      const dieStub = new DieStub()
      const game = new Game(dieStub)

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
      const dieStub = new DieStub()
      const game = new Game(dieStub)
      
      let sum = 0
      
      for (let x = 1; x < 5; x += 1) {
        sum += x
        game.rollNewDie()
        expect(game.isGuessCorrect(sum)).toBe(true)
      }
    })

    it('isGuessCorrect(2) should return false', () => {
      resetDieStubFaceValue()
      const dieStub = new DieStub()
      const game = new Game(dieStub)
      expect(game.isGuessCorrect(2)).toBe(false)
    })
  })

  describe('Tests that isGuessCorrect throws errors correctly', () => {
    it('calling without arguments should throw EmptyArgumentError', () => {
      const die = new Die()
      expect(() => new Game(die).isGuessCorrect())
        .toThrowError(CustomError.EmptyArgumentError)
    })

    it('calling with 1.5 or "5" should throw NotAnIntError', () => {
      const die = new Die()
      expect(() => new Game(die).isGuessCorrect(1.5))
        .toThrowError(CustomError.NotAnIntError)

      expect(() => new Game(die).isGuessCorrect("5"))
        .toThrowError(CustomError.NotAnIntError)
    })

    it('calling with -1 should throw NegativeNumberError', () => {
      const die = new Die()
      expect(() => new Game(die).isGuessCorrect(-1))
        .toThrowError(CustomError.NegativeNumberError)
    })
  })

  describe('Tests of resetGame', () => {
    it('should reset total dice value', () => {
      resetDieStubFaceValue()
      const dieStub = new DieStub()
      const game = new Game(dieStub)
      
      // simulates a round
      game.rollNewDie()
      expect(game.getTotalDiceValue()).toBe(1)
      expect(game.isGuessCorrect(1)).toBe(true)

      game.resetGame()
      
      const actualDiceValue = game.getTotalDiceValue()
      expect(actualDiceValue).toBe(0)
    })
  })

  it('should reset rolledDiceAmount', () => {
    const die = new Die()
    const game = new Game(die)
    game.rollNewDie()

    game.resetGame()

    expect(game.getRolledDiceAmount()).toBe(0)
  })
})
