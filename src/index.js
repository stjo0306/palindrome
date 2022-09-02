const { myIsPalindrome } = require('./palindrome');
const readline = require('readline');


const rl = readline.createInterface(process.stdin, process.stdout);

// manage user input
rl.setPrompt('please enter a string (or type \'exit\' to exit) >');
rl.on('line', (input) => {
  if (input === 'exit') {
    process.exit();
  }
  console.log(`\n\t\'${input}\' is ` + (myIsPalindrome(input) ? '' : 'not ') + 'a palendrome\n');
  rl.prompt();
});

// need this to get the ball rolling
rl.prompt();
