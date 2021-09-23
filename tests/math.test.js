const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/math')

test('Should calculate total with tip', () => expect(calculateTip(10, .3)).toBe(13))

test('Should calculate total with default tip', () => expect(calculateTip(10)).toBe(12.5))

test('Correct Temperature', () => expect(fahrenheitToCelsius(32)).toBe(0))

test('Correct Temperature', () => expect(celsiusToFahrenheit(0)).toBe(32))

// test('Async test demo', (done) => {
//     setTimeout(() => {
//         expect(1).toBe(1)
//         done()
//     }, 2000)
// })