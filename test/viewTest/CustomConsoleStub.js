'use strict'

class CustomConsoleStub {
    constructor() {
        let hasCalledClear

        this.hasCalledClear = () =>
            hasCalledClear

        this.clear = () => {
            hasCalledClear = true
        }

        this.log = () => { /* does nothing*/ }
    }
}

module.exports = CustomConsoleStub
