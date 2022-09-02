const input = process.argv[2];
const { myIsPalindrome } = require('./palindrome');

console.log(`\t\'${input}\' is ` + (myIsPalindrome(input) ? '' : 'not ') + 'a palendrome');
