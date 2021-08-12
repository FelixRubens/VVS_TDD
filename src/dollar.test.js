const Dollar = require('./dollar')

describe('Dollar', () => {
  it('should return 10 when five dollars are multiplied by two', () => {
    const five = new Dollar(5)
    let product = five.times(2)
    expect(product.ammount).toEqual(10)
    product = five.times(5)
    expect(product.ammount).toEqual(25)
  })

  it('should return true when dollars of the same value are compared', () => {
    expect(new Dollar(5).equals(new Dollar(5))).toBeTruthy()
    expect(new Dollar(5).equals(new Dollar(6))).toBeFalsy()
  })
})