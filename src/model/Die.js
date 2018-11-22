'use strict'

class Die {
  rollAndGetFaceValue() {
    return Math.ceil(Math.random() * 6)
  }
}

module.exports = Die
