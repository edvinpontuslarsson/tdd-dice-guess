'use strict'

import { assert } from 'chai'
import Game from '../../src/model/Game'

describe('Tests of Game instance', () => {

    describe('Tests of instantiation', () => {

        it('new Game() should be defined', done => {
            assert.isDefined(new Game())
            done()
        })
    })
})
