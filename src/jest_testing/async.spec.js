const Ajax = require('./async')
const axios = require('axios')

jest.mock('axios')

describe('echo function:', () => {
    test('should return value async', async () => {
        const someData = "some data"
        const result = await Ajax.echo(someData)
        expect(result).toBe(someData)
    })

    test('should return value with promise', () => {
        const someData = "some data"
        Ajax.echo(someData).then(data => {
            expect(data).toBe(someData)
        })
    })

    test('should catch error with promise', () => {
        Ajax.echo().catch(error => {
            expect(error).toBeInstanceOf(Error)
        })
    })

    test('should catch error async', async () => {
        try {
            Ajax.echo()
        } catch (err) {
            expect(err.message).toBe("error")
        }
    })
})

describe('ajax get:', () => {
    let response
    let todos

    beforeEach(() => {
        todos = [
            { id: 1, title: "Title 1" }
        ]

        response = {
            data: { todos }
        }

    })

    test('should return data from backend', () => {
        axios.get.mockReturnValue(response)
        return Ajax.get().then(data => {
            expect(data.todos).toEqual(todos)
        })
    })
})

