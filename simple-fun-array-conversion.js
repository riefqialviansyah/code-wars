// kyu 7
// https://www.codewars.com/kata/588854201361435f5e0000bd

function solution(arr) {
  let iterate = 1;
  let result = arr;

  while (result.length > 1) {
    let tmpResult = [];
    for (let i = 0; i < result.length; i++) {
      if (iterate % 2 != 0 && i % 2 == 0) {
        tmpResult.push(result[i] + result[i + 1]);
      } else if (iterate % 2 == 0 && i % 2 == 0) {
        tmpResult.push(result[i] * result[i + 1]);
      }
    }
    result = tmpResult;
    iterate++;
  }

  return result[0];
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(solution([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
