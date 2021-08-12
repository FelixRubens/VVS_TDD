
module.exports = class Sum {
  constructor( augend, addend ) {
    this.augend = augend
    this.addend = addend
  }

  getAugend () {
    return this.augend
  }
  
  getAddend () {
    return this.addend
  }
  
  reduce (currency) {
    const Money = require('./money') //por algum motivo fazer o require fora da classe nao esta funcionando
    const ammount = this.getAugend().getAmmount() + this.getAddend().getAmmount()
    return new Money(ammount, currency)
  }
}