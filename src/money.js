
module.exports = class Money {
  constructor(ammount, currency) {
    super.ammount = ammount
    this._currency = currency
  }

  getAmmount () {
    return this.ammount
  }
  
  getCurrency () {
    return this._currency
  }

  static dollar (ammount) {
    return new Money(ammount, 'USD')
  }

  static euro (ammount) {
    return new Money(ammount, 'EUR')
  }

  equals (other) {
    if (this.getCurrency() !== other.getCurrency()) return false
    return this.getAmmount() === other.getAmmount()
  }

  times (multiplier) {
    return new Money(this.getAmmount() * multiplier, this.getCurrency())
  }
}