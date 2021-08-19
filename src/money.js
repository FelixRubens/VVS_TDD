const Sum = require('./sum')

module.exports = class Money {
  #ammount
  #_currency

  constructor(ammount, currency) {
    this.#ammount = ammount
    this.#_currency = currency
  }

  getAmmount () {
    return this.#ammount
  }
  
  getCurrency () {
    return this.#_currency
  }

  static dollar (ammount) {
    return new Money(ammount, 'USD')
  }

  static euro (ammount) {
    return new Money(ammount, 'EUR')
  }

  plus (addend) {
    return new Sum(this, addend)
  }

  reduce (to, bank) {
    const rate = bank.actualRate(this.getCurrency(), to)
    return new Money(this.getAmmount() / rate, to)
  }

  equals (other) {
    if (this.getCurrency() !== other.getCurrency()) return false
    return this.getAmmount() === other.getAmmount()
  }

  times (multiplier) {
    return new Money(this.getAmmount() * multiplier, this.getCurrency())
  }
}