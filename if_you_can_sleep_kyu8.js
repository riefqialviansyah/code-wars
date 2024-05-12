var countSheep = function (num) {
  //your code here
  return Array(num)
    .fill()
    .map((el, i) => `${i + 1} sheep...`)
    .join("");
};

console.log(countSheep(3));
