'use strict'

class ReadlineSyncStub {
    constructor() {
        let askedQuestion

        this.getAskedQuestion = () =>
            askedQuestion

        this.question = (question) => {
            askedQuestion = question
            return 2
        }
    }
}

module.exports = ReadlineSyncStub
