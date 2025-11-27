// Tests for the calculateDiscount function

const assert = (expected, actual, testName) => {
  if (expected !== actual) {
    console.error(`❌ FAILED: ${testName}`);
    console.error(`   Expected: ${expected}, but got: ${actual}`);
    return false;
  } else {
    console.log(`✓ PASSED: ${testName}`);
    return true;
  }
};

// Import the function to test
const calculateDiscount = require('./pricing.js');

console.log('\n=== Tests calculateDiscount ===\n');

let allPassed = true;

// Tests Type 1 - No base discount, only years discount
console.log('Type 1 Tests (only years discount):');
allPassed &= assert(99, calculateDiscount(100, 1, 1), 'Type 1: 100€, 1 an → 99€');
allPassed &= assert(98, calculateDiscount(100, 1, 2), 'Type 1: 100€, 2 ans → 98€');
allPassed &= assert(95, calculateDiscount(100, 1, 5), 'Type 1: 100€, 5 ans → 95€');
allPassed &= assert(95, calculateDiscount(100, 1, 10), 'Type 1: 100€, 10 ans → 95€ (max 5%)');

// Tests Type 2 - 10% discount + years discount
console.log('\nType 2 Tests (10% discount + years discount):');
allPassed &= assert(89.1, calculateDiscount(100, 2, 1), 'Type 2: 100€, 1 an → 89.1€');
allPassed &= assert(88.2, calculateDiscount(100, 2, 2), 'Type 2: 100€, 2 ans → 88.2€');
allPassed &= assert(85.5, calculateDiscount(100, 2, 5), 'Type 2: 100€, 5 ans → 85.5€');
allPassed &= assert(85.5, calculateDiscount(100, 2, 10), 'Type 2: 100€, 10 ans → 85.5€ (max 5%)');

// Tests Type 3 - 30% discount + years discount
console.log('\nType 3 Tests (30% discount + years discount):');
allPassed &= assert(69.3, calculateDiscount(100, 3, 1), 'Type 3: 100€, 1 an → 69.3€');
allPassed &= assert(68.6, calculateDiscount(100, 3, 2), 'Type 3: 100€, 2 ans → 68.6€');
allPassed &= assert(66.5, calculateDiscount(100, 3, 5), 'Type 3: 100€, 5 ans → 66.5€');
allPassed &= assert(66.5, calculateDiscount(100, 3, 10), 'Type 3: 100€, 10 ans → 66.5€ (max 5%)');

// Tests Type 4 - 50% discount + years discount
console.log('\nType 4 Tests (50% discount + years discount):');
allPassed &= assert(49.5, calculateDiscount(100, 4, 1), 'Type 4: 100€, 1 an → 49.5€');
allPassed &= assert(49, calculateDiscount(100, 4, 2), 'Type 4: 100€, 2 ans → 49€');
allPassed &= assert(47.5, calculateDiscount(100, 4, 5), 'Type 4: 100€, 5 ans → 47.5€');
allPassed &= assert(47.5, calculateDiscount(100, 4, 10), 'Type 4: 100€, 10 ans → 47.5€ (max 5%)');

// Tests with different amounts
console.log('\nTests with different amounts:');
allPassed &= assert(198, calculateDiscount(200, 1, 1), 'Type 1: 200€, 1 an → 198€');
allPassed &= assert(44.55, calculateDiscount(50, 2, 1), 'Type 2: 50€, 1 an → 44.55€');

console.log('\n' + '='.repeat(40));
if (allPassed) {
  console.log('✓ All tests passed!');
} else {
  console.log('❌ Some tests failed');
  process.exit(1);
}
