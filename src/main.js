// *** random number generating algorithms ***
const lcg = require('./algorithms/lcg')
const mersenneTwister = require('./algorithms/mersenneTwister')

// *** tests ***
const frequencyTest = require('./tests/frequency.test')
const nearbyValues = require('./tests/nearbyValues.test')

// *** main meat ***
function main() {
  frequencyTest(1000000, lcg.nextFloat)
  frequencyTest(1000000, mersenneTwister.random)
  frequencyTest(1000000)

  nearbyValues(1000000, lcg.nextFloat)
  nearbyValues(1000000, mersenneTwister.random)
  nearbyValues(1000000)
}

main()
