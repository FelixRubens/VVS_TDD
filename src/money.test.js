const Money = require('./money')

describe('Money', () => {
  it('should corretly handle money multiplication', () => {
    const five = Money.dollar(5) 
    expect(five.times(2).getAmmount()).toEqual(10)
    expect(five.times(5).getAmmount()).toEqual(25)
  })

  it('should corretly handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy()
  })

  it('should correctly handle currencies', () => {
    expect(Money.dollar(1).getCurrency()).toEqual('USD')
    expect(Money.euro(1).getCurrency()).toEqual('EUR')
  })
})