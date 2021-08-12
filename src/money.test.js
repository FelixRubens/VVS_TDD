const Money = require('./money')
const Bank = require('./bank')
const Sum = require('./sum')

describe('Money', () => {
  it('should handle money multiplication', () => {
    const five = Money.dollar(5) 
    expect(five.times(2).getAmmount()).toEqual(10)
    expect(five.times(5).getAmmount()).toEqual(25)
  })

  it('should handle money equality', () => {
    expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
    expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
    expect(Money.euro(5).equals(Money.dollar(5))).toBeFalsy()
  })

  it('should handle currencies', () => {
    expect(Money.dollar(1).getCurrency()).toEqual('USD')
    expect(Money.euro(1).getCurrency()).toEqual('EUR')
  })

  it('should handle simple addition', () => {
    const five = Money.dollar(5)
    const sum = five.plus(five)
    const bank = new Bank()
    const reduced = bank.reduced(sum, 'USD')
    expect(reduced.equals(Money.dollar(10)))
  })

  it('should return a sum whe plus is udes', () => {
    const five = Money.dollar(5)
    const result = five.plus(five)
    expect(result.getAddend()).toEqual(five)
    expect(result.getAugend()).toEqual(five)
  })
  
  it('should reduce a sum', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4))
    const bank = new Bank()
    const result = bank.reduced(sum, 'USD')
    expect(result.getAmmount()).toEqual(Money.dollar(7).getAmmount())
  })

  it('should reduce from a money', () => {
    const bank = new Bank()
    const result = bank.reduced(Money.dollar(1), 'USD')
    expect(result).toEqual(Money.dollar(1))
  })
})