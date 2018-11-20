'use strict'

import { expect } from 'chai'
import CustomError from '../../src/model/CustomError'

describe('Tests of CustomError instance', () => {
    describe('Tests that required custom errors are defined', () => {

        it('new CustomError().emptyArgument should be defined', () => {
            expect(
                new CustomError().emptyArgument
            )
                .to.not.be.undefined
        })

        it('new CustomError().notAnInt should be defined', () => {
            expect(
                new CustomError().notAnInt
            )
                .to.not.be.undefined
        })
    })
})
