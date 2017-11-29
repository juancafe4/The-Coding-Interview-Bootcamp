// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // First solution
  // return str.split('').reverse().join(''); 
  
  // Second solution
  // let reversed = '';

  // for (let character of str) {
  //   console.log(character);
  //   reversed = character + reversed;
  // } 
  // return reversed;
  // 
  
  return str.split('').reduce((acc, curr) => curr + acc);
}
module.exports = reverse;
