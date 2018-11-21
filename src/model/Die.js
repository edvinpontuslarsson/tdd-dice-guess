'use strict'

class Die {
  constructor () {
    this._faceValue = null
  }

  getFaceValue () { return this._faceValue }

  roll () {
    this._faceValue =
            Math.ceil(Math.random() * 6)
  }
}

module.exports = Die
