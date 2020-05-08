const frequencyTest = require('./tests/frequency.test')
const nearbyValues = require('./tests/nearbyValues.test')

function main() {
  // frequency test passed for 1000000 iterations
  frequencyTest(1000000)
  // nearby values test passed for 1000000 iterations
  nearbyValues(1000000)
}

main()
