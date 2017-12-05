// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }
  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }
  let mid = Math.floor((2 * n - 1) / 2);

  if (mid - row <= level.length && mid + row >= level.length) {
    return pyramid(n, row, level + '#');
  } else {
    return pyramid(n, row, level + ' ');
  }
  // let col = 2 * n - 1;
  // let row = n;
  // let mid = Math.floor(col / 2);
  // for (let i = 0; i < row; i++) {
  //   let strLevel = '';
  //   for (let j = 0; j < col; j++) {
  //     if (mid - i <= j && mid + i >= j) {
  //       strLevel += '#'
  //     } else {
  //       strLevel += ' ';
  //     }
  //   }

  //   console.log(strLevel);
  // }
}

pyramid(4);
module.exports = pyramid;
