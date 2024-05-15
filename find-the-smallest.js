// https://www.codewars.com/kata/573992c724fc289553000e95
// kyu5
// belum kelar
// Time: 870ms Passed: 192Failed: 19Exit Code: 1

// function solution(num) {
//   let tmpSmallest = [];

//   let tmpArr = String(num)
//     .split("")
//     .map((el, idx) => {
//       if (idx == 0) {
//         tmpSmallest.push(el);
//         tmpSmallest.push(idx);
//         return Number(el);
//       } else {
//         if (el <= tmpSmallest[0]) {
//           tmpSmallest[0] = el;
//           tmpSmallest[1] = idx;
//           return Number(el);
//         } else {
//           return Number(el);
//         }
//       }
//     });

//   console.log(tmpSmallest, "<<<<<<", tmpArr);
//   tmpArr.splice(Number(tmpSmallest[1]), 1);
//   tmpArr.splice(0, 0, Number(tmpSmallest[0]));

//   return Number(tmpArr.join(""));
// }

// console.log(solution(261235));
// console.log(solution(209917));
// console.log(solution(1000000));

function solution(num) {
  const angkaStr = num.toString();
  let arrNum = [];

  for (let i = 0; i < angkaStr.length; i++) {
    let newAngka = angkaStr.slice(0, i) + angkaStr.slice(i + 1);
    for (let j = 0; j <= newAngka.length; j++) {
      let newFormAngka = newAngka.split("");
      newFormAngka.splice(j, 0, angkaStr[i]);
      arrNum.push({
        from: i,
        to: j,
        value: Number(newFormAngka.join("")),
      });
    }
  }
  console.log(arrNum.sort((a, b) => a.value - b.value));
  let result = arrNum.sort((a, b) => a.value - b.value)[0];
  return [result.value, result.from, result.to];
}
// console.log(solution(261235)); // [126235, 2, 0
// console.log(solution(209917)); // [29917, 1, 0]
// console.log(solution(1000000)); // [1, 0, 6]

// console.log(solution(285365));
// console.log(solution(269045));
// console.log(solution(296837));

// console.log(solution(199819884756)); // [119989884756, 4, 1]
console.log(solution(446374081962693)); // [144637408962693, 8, 0]
// console.log(solution(111111111)); // [111111111, 4, 4]

// testing(261235, [126235, 2, 0]);
// testing(209917, [29917, 0, 1]);
// testing(285365, [238565, 3, 1]);
// testing(269045, [26945, 3, 0]);
// testing(296837, [239687, 4, 1]);
