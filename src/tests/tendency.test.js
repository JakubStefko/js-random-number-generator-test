function tendencyTest(numberOfIterations = 0, randFunction = Math.random) {
  let i, lastRandom, currentRandom, increase, decrease, still

  increase = 0
  decrease = 0
  still = 0
  lastRandom = randFunction()

  for (i = 0; i < numberOfIterations; i++) {
    currentRandom = randFunction()

    if (currentRandom === lastRandom) {
      still += 1
    } else if (currentRandom > lastRandom) {
      increase += 1
    } else {
      decrease += 1
    }

    lastRandom = currentRandom
  }

  console.log('Increase: ', increase)
  console.log('Decrease: ', decrease)
  console.log('Still: ', still)
}

module.exports = tendencyTest
