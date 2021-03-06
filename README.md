# Welcome

If you are looking for random number generator tests in JS i encourage you to look in this repository.  
TBH i was almost sure, that most of the tests will fail, but i was pleasantly surprised.  
All algorithms are randing value feom 0 to 1.

If you want to run theese tests you have to install node first :)  
Then just open console, clone this repo, navigate to src folder and type `node main.js`

Enjoy!

# Source of knowledge

All tests are descripted here:  
https://www.drdobbs.com/testing-random-number-generators/184403185?fbclid=IwAR3LuZ3pQ5a_65u8LqGuLUa53AceHcUTHJlFCJa-5WBetlXTy5m_2I1WT2s

# Math.random()

I was curious what algorithm does `Math.random()` use.  
Based on [ECMA262](https://tc39.es/ecma262/#sec-math.random)
and this [article](https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131)... none!  
It's puerly based on current implementation.

MDN in [article](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) about
Math.random says: "`Math.random()` does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the `window.crypto.getRandomValues()` method."  
_data from 08.05.2020_

Anyway I am gonna look at this 3 random number generators just for curiosity.

# Test results for 1,000,000 iterations

_tested with: Ubuntu v.18.04, nodejs v.13.3.0_

## Frequency test

`MersenneTwister`  
Minimum number of same values: 1  
Maximum number of same values: 1  
Average: 1

`LCG`  
Minimum number of same values: 1  
Maximum number of same values: 1  
Average: 1

`Math.random`  
Minimum number of same values: 1  
Maximum number of same values: 1  
Average: 1

## Nearby values test

`MersenneTwister`  
Minimum difference between 2 random numbers: 0.000002152438128399936  
Maximum difference between 2 random numberss: 0.999999871020429  
Average difference: 0.5000301360231195

`LCG`  
Minimum difference between 2 random numbers: 2.614319738469817e-8  
Maximum difference between 2 random numberss: 0.999999681234079  
Average difference: 0.49992437019891156

`Math.random`  
Minimum difference between 2 random numbers: 0.000001586145575105391  
Maximum difference between 2 random numberss: 0.9999986307737156  
Average difference: 0.5003100863713612

## Length test

`MersenneTwister`  
Minimum length of rand value: 13  
Maximum length of rand value: 24  
Average: 18.269839

`LCG`  
Minimum length of rand value: 13  
Maximum length of rand value: 24  
Average: 18.269365

`Math.random`  
Minimum length of rand value: 13  
Maximum length of rand value: 24  
Average: 18.270861

## Tendency test

`MersenneTwister`  
Increase: 500022  
Decrease: 499978  
Still: 0

`LCG`  
Increase: 500437  
Decrease: 499563  
Still: 0

`Math.random`  
Increase: 499699  
Decrease: 500301  
Still: 0
