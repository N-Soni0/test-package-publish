import { expect, test } from 'vitest'
import { add, substract } from '..'

test('Adds 12 + 30 to equal 42', () => {
    expect(add(12, 30)).toBe(42);
})

test('Substracts 50 - 20 to equal 30', () => {
    expect(substract(50, 20)).toBe(30);
})