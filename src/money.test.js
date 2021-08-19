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
    const reduced = bank.reduce(sum, 'USD')
    expect(reduced.equals(Money.dollar(10)))
  })

  it('should return a sum whe plus is udes', () => {
    const five = Money.dollar(5)
    const result = five.plus(five)
    expect(result.getAddend()).toEqual(five)
    expect(result.getAugend()).toEqual(five)
  })
  
  it('should reduce from a sum', () => {
    const sum = new Sum(Money.dollar(3), Money.dollar(4))
    const bank = new Bank()
    const result = bank.reduce(sum, 'USD')
    expect(result.getAmmount()).toEqual(Money.dollar(7).getAmmount())
  })

  it('should reduce from a money', () => {
    const bank = new Bank()
    const result = bank.reduce(Money.dollar(1), 'USD')
    expect(result.getAmmount()).toEqual(Money.dollar(1).getAmmount())
  })

  it('should reduce from different currencies', () => {
    const bank = new Bank()
    bank.addRate('EUR', 'USD', 2)
    const result = bank.reduce(Money.euro(4), 'USD')
    expect(result.getAmmount()).toEqual(Money.dollar(2).getAmmount())
  })

  it('should handle mixed additon', () => {
    const fiveBucks = Money.dollar(5)
    const tenEuros = Money.euro(10)
    const bank = new Bank()
    bank.addRate('EUR', 'USD', 2)
    let result = bank.reduce(fiveBucks.plus(tenEuros), 'USD')
    expect(result.getAmmount()).toEqual(Money.dollar(10).getAmmount())
    bank.addRate('USD', 'EUR', 0.5)
    result = bank.reduce(tenEuros.plus(fiveBucks), 'EUR')
    expect(result.getAmmount()).toEqual(Money.euro(20).getAmmount())
  })
})