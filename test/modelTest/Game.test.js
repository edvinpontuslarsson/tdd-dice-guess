'use strict'

const Game = require('../../src/model/Game')
const CustomError = require('../../src/model/CustomError')
const Die = require('../../src/model/Die')

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

  describe('Tests of isGuessCorrect', () => {
    it('new Game(Die).isGuessCorrect() should throw EmptyArgumentError', () => {
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
  
  describe('Tests of isGuessTooLow', () => {
    it("isGuessTooLow should throw NoGuessError if isGuessCorrect hasn't been called with int", () => {
      expect(() => new Game(Die).isGuessTooLow())
        .toThrowError(CustomError.NoGuessError)
    })
  })
})
