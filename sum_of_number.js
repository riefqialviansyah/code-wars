// kyu 7
// https://www.codewars.com/kata/55f2b110f61eb01779000053

function solution(a, b) {
  let arr = [];
  if (a == b) return a;
  if (a > b) {
    const tmp = a;
    a = b;
    b = tmp;
  }
  for (let i = a; i <= b; i++) {
    arr.push(i);
  }
  return arr.reduce((tot, el) => tot + el, 0);
}

console.log(solution(-1, 2));
