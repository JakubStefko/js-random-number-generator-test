function nearbyValuesTest(numberOfIterations = 0, randFunction = Math.random) {
  let i, lastRandom, currentRandom, min, max, average, difference

  min = Infinity
  max = -Infinity
  average = 0
  lastRandom = randFunction()

  for (i = 0; i < numberOfIterations; i++) {
    currentRandom = randFunction()
    difference = Math.abs((lastRandom = currentRandom))

    average += difference

    if (difference < min) {
      min = difference
    }

    if (difference > max) {
      max = difference
    }

    lastRandom = currentRandom
  }

  console.log('Minimum difference between 2 random numbers: ', min)
  console.log('Maximum difference between 2 random numberss: ', max)
  console.log('Average difference: ', average / numberOfIterations)
}

module.exports = nearbyValuesTest
