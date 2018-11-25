'use strict'

const Game = require('./model/Game')
const Die = require('./model/Die')
const UserInterface = require('./view/UserInterface')
const readlineSync = require('readline-sync')

const run = () => {
    const game = new Game(new Die())
    const ui = new UserInterface(game, readlineSync) // a comment
}

module.exports = { run }
