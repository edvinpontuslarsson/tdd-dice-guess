'use strict'

export default class Die {
    constructor(maxValue = 6) {
        // babel plugin makes these attributes private
        this._faceValue = null
        this._maxValue = maxValue
    }

    getFaceValue() { return this._faceValue }

    roll() { this._faceValue = 0 }
}
