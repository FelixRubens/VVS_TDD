
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
  
  reduce (currency, bank) {
    const Money = require('./money') //por algum motivo fazer o require fora da classe nao esta funcionando
    const rate = bank.actualRate(this.getAddend().getCurrency(), currency)
    const ammount = this.getAugend().getAmmount() + this.getAddend().getAmmount() / rate
    return new Money(ammount, currency)
  }
}