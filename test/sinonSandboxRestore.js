'use strict'

const sinon = require('sinon')

/**
 * Restores all sinon fakes
 * https://sinonjs.org/releases/v7.1.1/general-setup/
 */
afterEach(() => {
    sinon.restore()
})
