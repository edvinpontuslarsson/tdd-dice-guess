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
  describe('Tests of new Game().isGuessCorrect()', () => {
    it('new Game().isGuessCorrect() should throw EmptyArgumentError', () => {
      expect(() => new Game().isGuessCorrect())
        .toThrowError(CustomError.EmptyArgumentError)
    })
  })
})
