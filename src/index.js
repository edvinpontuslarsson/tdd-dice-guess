'use strict'

const Game = require('./model/Game')
const Die = require('./model/Die')
const UserInterface = require('./view/UserInterface')
const readlineSync = require('readline-sync')
const Controller = require('./controller/Controller')

const shouldRunGame = () => process.argv[2] === 'game'

const run = readline => {
    const game = new Game(new Die())
    const ui = new UserInterface(game, readline)
    const controller = new Controller()

    do
        controller.playGame(game, ui)
    while(shouldRunGame())

    if (!shouldRunGame()) {
        console.log('Play the game with the command "npm start game"')
    }
}

run(readlineSync)

module.exports = { run }
