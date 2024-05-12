function countCows(n) {
  if (n !== +n) return null;

  let [a, b, c] = [1, 1, 1];

  for (let i = 2; i < n; i++) [a, b, c] = [b, c, a + c];

  return c;
}

console.log(countCows(1));
console.log(countCows(2));
console.log(countCows(3));
console.log(countCows(4));
console.log(countCows(5));

// https://www.codewars.com/kata/58311536e77f7d08de000085/solutions
