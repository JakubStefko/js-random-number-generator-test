# Welcome

Hello!  
If you are looking for random number generator tests in JS i encourage you to look in this repository.  
TBH i was almost sure, that most of the tests will fail, but i was pleasantly surprised

# Source of knowledge

All tests are descripted here:  
https://www.drdobbs.com/testing-random-number-generators/184403185?fbclid=IwAR3LuZ3pQ5a_65u8LqGuLUa53AceHcUTHJlFCJa-5WBetlXTy5m_2I1WT2s

# Math.random()

I was curious what algorithm does `Math.random()` use.  
Based on (ECMA262)[https://tc39.es/ecma262/#sec-math.random]
and this (article)[https://hackernoon.com/how-does-javascripts-math-random-generate-random-numbers-ef0de6a20131]:  
none... It is puerly based on current implementation.

MDN in (article)[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random] about
Math.random says: "`Math.random()` does not provide cryptographically secure random numbers. Do not use them for anything related to security. Use the Web Crypto API instead, and more precisely the `window.crypto.getRandomValues()` method." (data from 08.05.2020)

# Test results for 1,000,000 iterations, tested with: Ubuntu v.18.04, nodejs v.13.3.0

## Frequency test

Minimum number of same values: 1  
Maximum number of same values: 1  
Average: 1

## Nearby values test

Minimum difference between 2 random numbers: 0.000001586145575105391  
Maximum difference between 2 random numberss: 0.9999986307737156  
Average difference: 0.5003100863713612

## Mersenne Twister test

## LCG test
