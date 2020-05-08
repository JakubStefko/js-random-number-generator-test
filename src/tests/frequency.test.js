function frequencyTest(numberOfIterations = 0, randFunction = Math.random) {
  let i, currentRand, min, max, average
  let model = {}

  for (i = 0; i < numberOfIterations; i++) {
    currentRand = randFunction()
    if (currentRand in model) {
      model[currentRand] += 1
    } else {
      model[currentRand] = 1
    }
  }

  // console.log(model) // uncomment if you want to lookup model
  min = Infinity
  max = -Infinity
  average = 0

  for (i in model) {
    average += model[i]

    if (model[i] < min) {
      min = model[i]
    }

    if (model[i] > max) {
      max = model[i]
    }
  }

  console.log('Number of iterations: ', numberOfIterations)
  console.log('Minimum number of same values: ', min)
  console.log('Maximum number of same values: ', max)
  console.log('Average: ', average / numberOfIterations)
}

module.exports = frequencyTest
