const Money = require("./money")

module.exports = class Bank {

  constructor() {
    this.rate = {}
  }

  reduce (source, currency) {
    if (source.constructor === Money) {
      return source.reduce(currency, this)
    }
    const sum = source
    return sum.reduce(currency, this)
  }

  getRate () {
    return this.rate
  }
  
  setRate (newRate) {
    this.rate = newRate
  }

  addRate (from, to, rate) {
    const newRate = this.getRate()
    newRate[`${from}-${to}`] = rate
    this.setRate(newRate)
  }

  actualRate (from, to) {
    if (from === to) return 1
    return  this.getRate()[`${from}-${to}`]
  }
}