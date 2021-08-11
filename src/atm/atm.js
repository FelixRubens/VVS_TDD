function solutions (bills, ammounts, variation, amount, position) {
  const list = []
  const value = _compute(bills, variation)
  if (value < amount) {
    for (let i = position; i < bills.length; i++) {
      if (ammounts[i] > variation[i]) {
        const newvariation = [...variation]
        newvariation[i]++
        const newList = solutions(bills, ammounts, newvariation, amount, i)
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

function _compute (bills, variation) {
  let ret = 0
  for (let i = 0; i < variation.length; i++) {
    ret += bills[i] * variation[i]
  }
  return ret
}

module.exports = solutions
