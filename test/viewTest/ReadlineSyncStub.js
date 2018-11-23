'use strict'

class ReadlineSyncStub {
    constructor() {
        let hasQuestionBeenCalled

        this.hasQuestionBeenCalled = () =>
            hasQuestionBeenCalled

        this.question = () => {
            hasQuestionBeenCalled = true
            return 2
        }
    }
}

module.exports = ReadlineSyncStub
