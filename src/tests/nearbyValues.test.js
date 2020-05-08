function nearbyValues(numberOfIterations = 0) {
  let i, lastRandom, currentRandom, min, max, average, difference

  min = Infinity
  max = -Infinity
  average = 0
  lastRandom = Math.random()

  for (i = 0; i < numberOfIterations; i++) {
    currentRandom = Math.random()
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

  console.log('Number of iterations: ', numberOfIterations)
  console.log('Minimum difference between 2 random numbers: ', min)
  console.log('Maximum difference between 2 random numberss: ', max)
  console.log('Average difference: ', average / numberOfIterations)
}

module.exports = nearbyValues
