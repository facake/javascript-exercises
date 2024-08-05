const palindromes = function (string) {
  // string = string.toLowerCase().replace("[ ,.!]", "");
  chars = [...string.toLowerCase()];
  chars = chars.filter((char) => /\w/.test(char));
  console.log(chars);
  let middle = Math.floor(chars.length / 2);
  for (let i = 0; i < middle; i++) {
    if (chars[i] != chars[chars.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
