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
    this._setAmmout(this.ammount * multiplier)
  }
}