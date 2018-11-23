'use strict'

let faceValue = 0

class DieStub {
    rollAndGetFaceValue() {
        faceValue += 1
        return faceValue
    }
}

const resetFaceValue = () => {
    faceValue = 0
}

module.exports = {
    DieStub,
    resetFaceValue
}
