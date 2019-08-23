const unobstructedWestViewCount = buildings => {
  return buildings.reverse().reduce((accumulator, currentValue, index, array) => {
    const previousBuilding = array[--index] || 0
    if (currentValue > previousBuilding) return ++accumulator
    return accumulator
  }, 0)
}

module.exports = { unobstructedWestViewCount }
