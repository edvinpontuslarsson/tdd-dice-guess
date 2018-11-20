'use strict'

import { expect } from 'chai'
import { EmptyArgumentError } from '../../src/model/CustomError'

describe('Tests of CustomError instance', () => {
  describe('Tests of custom errors', () => {
    it('EmptyArgument should be catchable error', () => {
      let catchable
      
      try {
        throwEmptyArgumentError() 
      } catch (error) {
        if (error instanceof EmptyArgumentError) {
            catchable = true
        }
      }

      expect(catchable)
        .to.be.true
    })
  })
})

function throwEmptyArgumentError () {
  throw new EmptyArgumentError()
}

function throwNotAnIntError () {
  throw new notAnIntError()
}
