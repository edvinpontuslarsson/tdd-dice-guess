'use strict'

import { expect } from 'chai'
import emptyArgumentError from '../../src/model/CustomError'
import notAnIntError from '../../src/model/CustomError'

describe('Tests of CustomError instance', () => {
  describe('Tests of custom errors', () => {
    it('EmptyArgument should be catchable error', () => {
      let catchable
      
      try {
        throw new emptyArgumentError() 
      } catch (error) {
        if (error instanceof emptyArgumentError) {
            catchable = true
        }
      }

      expect(catchable)
        .to.be.true
    })
  })
})

function throwEmptyArgumentError () {
  throw new emptyArgumentError()
}

function throwNotAnIntError () {
  throw new notAnIntError()
}
