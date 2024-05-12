// function countBy(x, n) {
//   let z = [];

//   while (z.length < n) {
//     z.push(x * (z.length + 1));
//   }

//   return z;
// }

// console.log(countBy(1, 10)); // [1,2,3,4,5,6,7,8,9,10]
// console.log(countBy(2, 5)); // [2,4,6,8,10]
// console.log(countBy(3, 5)); // [2,4,6,8,10]

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

const countBy = (x, n) => {
  return [...Array(n)].map((el, i) => (i + 1) * x);
  // return Array(n)
  //   .fill()
  //   .map((el, i) => (i + 1) * x);
};

console.log(countBy(1, 10));
console.log(countBy(2, 5));
console.log(countBy(3, 5));
