'use strict'

let faceValue = 0

class DieStub {
    rollAndGetFaceValue() {
        faceValue += 1
        return faceValue
    }
}

module.exports = DieStub
