module.exports = class ATM {

  constructor ({ bills, billAmmounts }) {
    this.bills = bills.sort((a, b) => b - a)
    this.billAmmounts = billAmmounts.sort((a, b) => b - a)
  }

  solutions (variation, amount, position) {
    const list = []
    const value = this._compute(this.bills, variation)
    if (value < amount) {
      for (let i = position; i < this.bills.length; i++) {
        if (this.billAmmounts[i] > variation[i]) {
          const newVariation = [...variation]
          newVariation[i]++
          const newList = this.solutions(newVariation, amount, i)
          if (newList != null) {
            list.push(...newList)
          }
        }
      }
    } else if (value === amount) {
      list.push([...variation])
    }
    return list
  }

  _setBills (bills) {
    this.bills = bills
  }

  _setBillAmmounts (billAmmounts) {
    this.billAmmounts = billAmmounts
  }
  
  getConfigurations (ammount) {
    const originalBills = [...this.bills]
    const originalBillAmmounts = [...this.billAmmounts]
    const initialVariation = new Array(this.bills.length).fill(0)
    const allSolutions = this.solutions(initialVariation, ammount, 0)
    const configurations = {
      moreHigherBills: allSolutions[0],
      moreLowerBills: allSolutions[allSolutions.length - 1]
    }

    this._setBills(originalBills)
    this._setBillAmmounts(originalBillAmmounts)

    return configurations
  }

  _compute (bills, variation) {
    let ret = 0
    for (let i = 0; i < variation.length; i++) {
      ret += bills[i] * variation[i]
    }
    return ret
  }
}
