// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {

  // return fib(n - 2) + fib(n - 1);
  // let result = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   result.push(result[i - 2] + result[i - 1]);
  // }
  
  if (n < 2) {
    return n;
  }

  let n_1 = 1;
  let n_2 = 0;

  let res = 0;

  for (let i = 2; i <= n; i++) {
    res = n_1 + n_2;
    n_2 = n_1;
    n_1 = res;
  }

  return res;
}

module.exports = fib;
