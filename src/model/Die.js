'use strict'

export default class Die {
    constructor() {
        // babel plugin makes attribute private
        this._faceValue = null
    }

    getFaceValue() { return this._faceValue }

    roll() { this._faceValue = 0 }
}
