// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let obj = {};
  for (let character of str) {
    // if (!obj[character]) {
    //   obj[character] = 1;
    // } else {
    //   obj[character]++;
    // }
    
    obj[character] = obj[character] + 1 || 1;
  }

  let max = Number.MIN_SAFE_INTEGER;
  let char = '';
  for (let key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      char = key
    }
  }

  return char;
}

maxChar('Hello there');
module.exports = maxChar;
