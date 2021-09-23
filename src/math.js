const calculateTip = (total, tipPercent = .25) => total * (1 + tipPercent)

const fahrenheitToCelsius = temp => (temp - 32) / 1.8

const celsiusToFahrenheit = temp => (temp * 1.8) + 32

module.exports = {
    calculateTip,
    fahrenheitToCelsius,
    celsiusToFahrenheit
}