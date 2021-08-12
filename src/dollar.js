module.exports = class Dollar {
  constructor (ammount) {
    this.ammount = ammount
  }
  _setAmmout (ammount) {
    this.ammount = ammount
  }
  
  _getAmmount () {
    return this.ammount
  }

  times (multiplier) {
    return new Dollar(this.ammount * multiplier)
  }

  equals (other) {
    return this._getAmmount() === other._getAmmount()
  }
}