function monkeyCount(n) {
  // your code here
  return Array(n)
    .fill()
    .map((el, i) => i + 1);
}

console.log(monkeyCount(10));
