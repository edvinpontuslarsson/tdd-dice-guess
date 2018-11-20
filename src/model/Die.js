'use strict'

class Die {
  constructor () {
    // babel plugin makes attributes starting with _ private
    this._faceValue = null
  }

  getFaceValue () { return this._faceValue }

  roll () {
    this._faceValue =
            Math.ceil(Math.random() * 6)
  }
}

export default Die
