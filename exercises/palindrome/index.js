// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // return str === str.split('').reverse().join('');

  // Second solution
  // for (let i = 0; i < str.length; i++) {
  //   if (str[i] !== str[str.length - 1 - i]) {
  //      console.log(str[i], str[str.length - 1 - i]);
  //     return false
  //   };
  // }
  // return true;
  
  return str.split('').every((char, index) => char === str[str.length - 1 - index]);
}
palindrome("1000000001")
module.exports = palindrome;
