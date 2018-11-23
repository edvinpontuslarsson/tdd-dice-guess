'use strict'

const UI = require('../../src/view/UserInterface')
const mockConsole = require('jest-mock-console')

// start with welcome message
describe('Tests of UserInterface', () => {

    describe('Test of displayWelcomeMessage', () => {
        it('Should call console.log with "Welcome!"', () => {
            
            const restoreConsole = mockConsole.default()
            
            new UI().displayWelcomeMessage()
            
            expect(console.log)
                .toHaveBeenCalledWith('Welcome!')
            restoreConsole()
        })
    })
})
