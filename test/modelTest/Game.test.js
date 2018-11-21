'use strict'

const Game = require('../../src/model/Game')
const CustomError = require('../../src/model/CustomError')
const Die = require('../../src/model/Die')

jest.mock('../../src/model/Die') // makes Die mock instance

beforeEach(() => {
  Die.mockClear()
})

describe('Tests of Game instance', () => {
  describe('Tests of new Game()', () => {
    it('new Game() should throw EmptyArgumentError', () => {
      expect(() => new Game())
        .toThrowError(CustomError.EmptyArgumentError)
    })
    it('new Game(Die) should create 2 dice', () => {
      const game = new Game(Die)
      expect(Die).toHaveBeenCalledTimes(2)
    })
  })
  describe('Tests of new Game(Die).validateGuess()', () => {
    it('new Game(Die).validateGuess() should throw EmptyArgumentError', () => {
      expect(() => new Game(Die).validateGuess())
        .toThrowError(CustomError.EmptyArgumentError)
    })
    it('calling with 1.5 or "5" should throw NotAnIntError', () => {
      expect(() => new Game(Die).validateGuess(1.5))
        .toThrowError(CustomError.NotAnIntError)

      expect(() => new Game(Die).validateGuess("5"))
        .toThrowError(CustomError.NotAnIntError)
    })
    it('calling with -1 should throw NegativeNumberError', () => {
      expect(() => new Game(Die).validateGuess(-1))
        .toThrowError(CustomError.NegativeNumberError)
    })
  })
})
