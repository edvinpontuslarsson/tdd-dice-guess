'use strict'

// mocks roll method
const mockRoll = jest.fn()

const mock = jest.fn().mockImplementation(() => {
    return { roll: mockRoll }
})

module.exports = mock
module.exports = { mockRoll }
