'use strict'

let faceValue = 0

class DieStub {
    constructor (initialFaceValue) {
        faceValue = initialFaceValue
    }

    rollAndGetFaceValue() {
        faceValue += 1
        return faceValue
    }
}

module.exports = DieStub
