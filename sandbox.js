'use strict'

const UI = require('./src/view/UserInterface')

const ui = new UI('test', 'test')

console.log('Console will clear in 2 seconds')

setTimeout(() => {
    ui.initializeView(console)
}, 2000);
