function lengthTest(numberOfIterations = 0, randFunction = Math.random) {
  let i, currentRand, min, max, average
  let model = {}

  for (i = 0; i < numberOfIterations; i++) {
    currentRand = randFunction()
    currentRand = currentRand.toString().length
    if (currentRand in model) {
      model[currentRand] += 1
    } else {
      model[currentRand] = 1
    }
  }

  min = Infinity
  max = -Infinity
  average = 0

  for (i in model) {
    average += model[i] * i

    if (i < min) {
      min = i
    }

    if (i > max) {
      max = i
    }
  }

  console.log('Minimum length of rand value: ', min)
  console.log('Maximum length of rand value: ', max)
  console.log('Average: ', average / numberOfIterations)
}

module.exports = lengthTest
