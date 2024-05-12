// kyu 7
// https://www.codewars.com/kata/5a1e6323ffe75f71ae000026

function solution(str) {
  const data = str
    .split("+")
    .map((el, idx) => (idx == 1 ? el.split("=") : el))
    .flat()
    .map((el) => Number(el.split("").reverse().join("")));

  return data[0] + data[1] == data[2];
}

console.log(solution("73+42=16"));
console.log(solution("5+8=13"));
console.log(solution("10+20=30"));
