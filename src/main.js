const frequencyTest = require('./tests/frequency.test')
const nearbyValues = require('./tests/nearbyValues.test')

function main() {
  frequencyTest(1000000)
  nearbyValues(1000000)
}

main()
