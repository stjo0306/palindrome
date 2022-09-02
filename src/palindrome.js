const myIsPalindrome = (value) => {
  // make lower case and remove any spaces
  const input = value.trim().toLowerCase().replace(/\s/g, '');
  const count = Math.floor(input.length / 2);

  for(let i = 0; i < count; ++i) {
    const beginning = input[i];
    const ending = input[input.length - 1 - i];
    if (beginning !== ending) {
      return false;
    }
  }
  return true;
};

module.exports = {
  myIsPalindrome,
}
