'use strict'

class EmptyArgumentError extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
    }
}

class NotAnIntError {}

module.exports = {
    EmptyArgumentError,
    NotAnIntError
}
