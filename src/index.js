const { myIsPalindrome } = require('./palindrome');

const testInputs = [
  'racecar',
  'noon',
  'hello world',
];

console.log('Using my palindrome detector module\n');
testInputs.forEach((input) => {
  console.log(`\t\'${input}\' is ` + (myIsPalindrome(input) ? '' : 'not ') + 'a palendrome');
});

console.log('\n');
