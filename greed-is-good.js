// kyu5
// https://www.codewars.com/kata/5270d0d18625160ada0000e4

function solution(arr) {
  const rule = {
    "1s": 1000,
    "6s": 600,
    "5s": 500,
    "4s": 400,
    "3s": 300,
    "2s": 200,
    1: 100,
    5: 50,
  };

  let tmpObj = {};

  arr.map((el) => {
    if (!tmpObj.hasOwnProperty(el)) {
      tmpObj[el] = 0;
    }

    tmpObj[el] += 1;
  });

  let result = 0;
  console.log(tmpObj, "<<<<");
  for (key in tmpObj) {
    if (Number(key) == 1 || Number(key) == 5) {
      if (tmpObj[key] < 3) {
        result += tmpObj[key] * rule[Number(key)];
      } else {
        let tmpBagi = Math.floor(tmpObj[key] / 3);
        let tmpSisaBagi = tmpObj[key] % 3;
        result +=
          tmpBagi * rule[`${key}s`] +
          (tmpSisaBagi != 0 ? tmpSisaBagi * rule[`${key}`] : 0);
      }
    } else {
      let tmpBagi = Math.floor(tmpObj[key] / 3);
      if (tmpBagi > 0) {
        result += tmpBagi * rule[`${key}s`];
      }
    }
  }

  return result;
}

console.log(solution([1, 1, 1, 1, 5, 5, 5, 5, 2, 2, 2])); // 1850
console.log(solution([1, 1, 1, 3, 1])); // 1100
console.log(solution([2, 4, 4, 5, 4])); // 450
