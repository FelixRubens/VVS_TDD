const ATM = require('./atm')

describe('ATM', () => {
  it('should return correct solutions for a given withdrawl amount', () => {
    const bills = [100, 50, 20, 10]
    const billAmmounts = [10, 10, 10, 10]
    const atm = new ATM({ bills, billAmmounts })
    const initialVariation = new Array(bills.length).fill(0)
    const withdrawAmount = 300
    const result = atm.solutions(initialVariation, withdrawAmount, 0)
    expect(result.some(element => areEquals(element, [2, 2, 0, 0]))).toBeTruthy()
    expect(result.some(element => areEquals(element, [1, 3, 2, 1]))).toBeTruthy()
  })
  
  it('should return two configurations: one with more higher bills, another with more lower bills', () => {
    const bills = [100, 50, 20, 10]
    const billAmmounts = [10, 10, 10, 10]
    const atm = new ATM({ bills, billAmmounts })
    const configurations = atm.getConfigurations(300)
    const higherBills = summation(configurations.moreHigherBills)
    const lower = summation(configurations.moreLowerBills)
    expect(higherBills).toBeLessThan(lower)
  })


  areEquals = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false
    }
    return true
  }

  summation = (bills) => {
    return bills.reduce((a, b) => a + b, 0)
  }
})
