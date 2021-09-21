const calculateTip = (total, tipPercent = .25) => total * (1 + tipPercent)

module.exports = {
    calculateTip
}