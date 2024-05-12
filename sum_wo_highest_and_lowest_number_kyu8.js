function sumArray(array) {
  if (!array || array.length <= 2) return 0;
  return array
    .sort((a, b) => a - b)
    .slice(1, -1)
    .reduce((tot, el) => tot + el);
}

console.log(sumArray(null));
console.log(sumArray([]));
console.log(sumArray([3, 5]));
console.log(sumArray([6, 2, 1, 8, 10]));
// console.log([6, 2, 1, 8, 10].sort((a, b) => a - b).slice(1, -1));
