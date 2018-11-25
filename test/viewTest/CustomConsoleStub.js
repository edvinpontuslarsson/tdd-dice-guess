'use strict'

class CustomConsoleStub {
    constructor() {
        let hasCalledClear

        this.hasCalledClear = () =>
            hasCalledClear

        this.clear = () => {
            hasCalledClear = true
        }
    }
}

module.exports = CustomConsoleStub
