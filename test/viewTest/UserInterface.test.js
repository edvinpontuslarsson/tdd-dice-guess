'use strict'

const UI = require('../../src/view/UserInterface')
const mockConsole = require('jest-mock-console').default

// start with welcome message
describe('Tests of UserInterface', () => {

    describe('Test of displayWelcomeMessage', () => {
        it('Should call console.log with "Welcome!"', () => {
            
            const restoreConsole = mockConsole()
            
            new UI().displayWelcomeMessage()
            
            expect(console.log)
                .toHaveBeenCalledWith('Welcome!')
            restoreConsole()
        })
    })
})
