const myIsPalindrome = (value) => {
  const input = value.trim().toLowerCase();
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
