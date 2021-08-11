const ATM = require('./atm')

describe('ATM', () => {
  it('should return correct solutions for a given withdrawl amount', () => {
    const bills = [100, 50, 20, 10]
    const billAmounts = [10, 10, 10, 10]
    const initialVariation = new Array(bills.length).fill(0)
    const withdrawlAmount = 300
    const result = ATM(bills, billAmounts, initialVariation, withdrawlAmount, 0)
    expect(result.some(element => areEquals(element, [2, 2, 0, 0]))).toBeTruthy()
    expect(result.some(element => areEquals(element, [1, 3, 2, 1]))).toBeTruthy()
  })

  function areEquals (arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) return false
    }
    return true
  }
})
