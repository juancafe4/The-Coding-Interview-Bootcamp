// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // let i = 0;
  // let chunck = [];
  // let sub = [];
  // while (i < array.length) {
  //   sub.push(array[i]);
  //   if (i % size === 0 && i !== 0) {
  //     chunck.push(sub);
  //     sub = [];
  //   }
  //   i++;
  // }
  // if (sub.length) {
  //   chunck.push(sub);
  // }
  // return chunck;
  // 
  // const chuncked = [];

  // for (let elm of array) {
  //   const last = chuncked[chuncked.length - 1];
  //   if (!last || last.length === size) {
  //     chuncked.push([elm]);
  //   } else {
  //     last.push(elm);
  //   } 
  // }

  // return chuncked;
  
  const chunked  = [];
  let i = 0;

  while (i < array.length) {
    chunked.push(array.slice(i, i + size));
    i += size;
  }

  return chunked;
}
module.exports = chunk;
