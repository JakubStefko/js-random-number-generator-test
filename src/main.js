// *** random number generating algorithms ***
const lcg = require('./algorithms/lcg')
const mersenneTwister = require('./algorithms/mersenneTwister')

// *** tests ***
const frequencyTest = require('./tests/frequency.test')
const nearbyValuesTest = require('./tests/nearbyValues.test')
const lengthTest = require('./tests/length.test')
const tendencyTest = require('./tests/tendency.test')

// *** main meat ***
function main() {
  frequencyTest(1000000, lcg.nextFloat)
  frequencyTest(1000000, mersenneTwister.random)
  frequencyTest(1000000)

  nearbyValuesTest(1000000, lcg.nextFloat)
  nearbyValuesTest(1000000, mersenneTwister.random)
  nearbyValuesTest(1000000)

  lengthTest(1000000, lcg.nextFloat)
  lengthTest(1000000, mersenneTwister.random)
  lengthTest(1000000)

  tendencyTest(1000000, lcg.nextFloat)
  tendencyTest(1000000, mersenneTwister.random)
  tendencyTest(1000000)
}

main()
