// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // let checker = 'aeiou' // || ['a', 'e', 'i', 'o', 'u'];
  // let count = 0;

  // for (let char of str.toLowerCase()) {
  //   if (checker.includes(char)) {
  //     count++;
  //   }
  // }

  // return count;

  const match = str.match(/[aeiou]/gi);

  return match ? match.length:0;
}

module.exports = vowels;
