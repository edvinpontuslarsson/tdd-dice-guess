'use strict'

import { expect } from 'chai'
import EmptyArgumentError from '../../src/model/CustomError'
import NotAnIntError from '../../src/model/CustomError'

describe('Tests of CustomError instance', () => {
  describe('Tests of custom errors', () => {
    it('EmptyArgument should be throwable error', done => {
      expect(() => {
          
      })
    })
  })
})

function throwEmptyArgumentError () {
  throw new EmptyArgumentError()
}

function throwNotAnIntError () {
  throw new NotAnIntError()
}
