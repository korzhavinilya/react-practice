const Lodash = require('./sync');

let _ = new Lodash()

describe("Lodash compact:", () => {
    let array

    beforeEach(() => {
        array = [false, 42, null, undefined, 0, "", true, "Hello"]
    })

    test('should be defined', () => {
        expect(_.compact).not.toBeUndefined()
        expect(_.compact).toBeDefined()
    })

    test('should array be editable', () => {
        array.push(...['one', 'two'])
        expect(array).toContain('one')
        expect(array).toContain('two')
    })

    test('should remove falsy values from array', () => {
        const result = [42, true, "Hello"]
        expect(_.compact(array)).toEqual(result)
    })

    test('should NOT contain falsy values', () => {
        expect(_.compact(array)).not.toContain(false)
        expect(_.compact(array)).not.toContain(null)
        expect(_.compact(array)).not.toContain(undefined)
        expect(_.compact(array)).not.toContain(0)
        expect(_.compact(array)).not.toContain("")
    })
})

describe('Lodash groupBy:', () => {
    test('should ', () => {
        expect(_.groupBy).toBeDefined()
    })

    test('should group array by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1]
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result)
    })

    test('should group array by length', () => {
        const array = ['one', 'two', 'three']
        const result = {
            3: ['one', 'two'],
            5: ['three']
        }
        expect(_.groupBy(array, 'length')).toEqual(result)
    })

    test('should NOT return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array)
    })
})
