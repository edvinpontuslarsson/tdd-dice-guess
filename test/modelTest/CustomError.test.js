'use strict'

import { expect } from 'chai'
import CustomError from '../../src/model/CustomError'

describe('Tests of CustomError instance', () => {
  describe('Tests of custom errors', () => {
    it('EmptyArgument should be catchable error', () => {
      let catchable
      
      try {
        throw new CustomError.EmptyArgumentError() 
      } catch (error) {
        if (error instanceof CustomError.EmptyArgumentError) {
            catchable = true
        }
      }

      expect(catchable)
        .to.be.true
    })

    it('NotAnIntError should be catchable error', () => {
        let catchable

        try {
            throw new CustomError.NotAnIntError()
        } catch (error) {
            if (error instanceof CustomError.NotAnIntError) {
                catchable = true
            }
        }

        expect(catchable)
            .to.be.true
    })
  })
})
