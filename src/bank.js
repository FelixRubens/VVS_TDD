const Money = require("./money")

module.exports = class Bank {
  reduced (source, currency) {
    if (source.constructor === Money) {
      return source.reduce()
    }
    const sum = source
    return sum.reduce(currency)
  }
}