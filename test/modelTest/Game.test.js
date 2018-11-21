'use strict'

const Game = require('../../src/model/Game')
const CustomError = require('../../src/model/CustomError')

describe('Tests of Game instance', () => {
  describe('Tests of new Game()', () => {
    it('new Game() should throw EmptyArgumentError', () => {
      expect(() => new Game())
        .toThrowError(CustomError.EmptyArgumentError)
    })
  })
  describe('Tests of new Game().isGuessCorrect()', () => {
    it('new Game().isGuessCorrect() should throw EmptyArgumentError', () => {
      expect(() => new Game().isGuessCorrect())
        .toThrowError(CustomError.EmptyArgumentError)
    })
    // it('new Game(dieMock) should call dieMock constructor', () => {
        
    // })
  })
})
