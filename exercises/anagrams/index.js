// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  // stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  // let charMaps = {};


  // for (let char of stringA) {
  //   charMaps[char] = charMaps[char] + 1 || 1;
  // }

  // for (let char of stringB) {
  //   if (charMaps[char]) {
  //     charMaps[char]--;
  //   } else {
  //     charMaps[char] = 1
  //   }
  // }

  // for (let key in charMaps) {
  //   const n = charMaps[key];
  //   if (n < 0 || n > 0) return false;
  // }

  // return true;
  
  
  stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  stringB = stringB.replace(/[^\w]/g, '').toLowerCase();

  let charMapsA = {};
  let charMapsB = {};


  for (let char of stringA) {
    charMapsA[char] = charMapsA[char] + 1 || 1;
  }

  for (let char of stringB) {
    charMapsB[char] = charMapsB[char] + 1 || 1;
  }

  if (Object.keys(charMapsA).length !== Object.keys(charMapsB).length) {
    return false;
  }

  for (let key in charMapsA) {
    if (charMapsA[key] !== charMapsB[key]) {
      return false;
    }
  }
  return true;
}

anagrams("One one", "One one c");
module.exports = anagrams;
