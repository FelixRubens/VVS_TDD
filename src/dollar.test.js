const Dollar = require('./dollar')
describe('Dolar', () => {
  it('should return 10 when five dollars are multiplied by two', () => {
    const five = new Dollar(5)
    five.times(2)
    expect(five.ammount).toEqual(10)
  })
})