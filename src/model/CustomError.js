'use strict'

import customError from 'node-custom-errors'

class CustomError {
    constructor() {
        this.emptyArgument = customError.create('emptyArgument')
        this.notAnInt = customError.create('notAnInt')
    }
}

export default CustomError