'use strict'

const Game = require('./model/Game')
const Die = require('./model/Die')

const run = () => {
    const game = new Game(new Die())
}

module.exports = { run }
