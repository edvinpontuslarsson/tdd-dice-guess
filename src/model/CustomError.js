'use strict'

class EmptyArgumentError extends Error {}

class NotAnIntError extends Error {}

let NegativeNumberError

module.exports = {
    EmptyArgumentError,
    NotAnIntError,
    NegativeNumberError
}
