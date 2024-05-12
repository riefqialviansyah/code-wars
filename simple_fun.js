// kyu 7
// https://www.codewars.com/kata/58b8db810f40ea7788000126

function solution(a, b) {
  let pembagi = [];
  let counter = a;
  while (true) {
    if (counter == 0) {
      break;
    }
    if (Number.isInteger(a / counter) && Number.isInteger(b / counter)) {
      pembagi.push(counter);
    }
    counter--;
  }

  return a / pembagi[0] + b / pembagi[0];
}

console.log(solution(2, 4));
console.log(solution(10, 100));
console.log(solution(5, 5));
