// kyu 7
// https://www.codewars.com/kata/6630da20f925eb3007c5a498/train/javascript

function solution(str) {
  let arrCandle = str.split("").map((el) => Number(el));

  let counter = 0;
  //   console.log(arrCandle, "<<<<<");
  for (let i = 0; i < arrCandle.length; i++) {
    let tmpArr = arrCandle.slice(i, i + 3);

    if (tmpArr[0] == 0) {
      continue;
    }

    while (true) {
      let sum = tmpArr.reduce((tot, el) => tot + el, 0);

      if (sum == 0) {
        return counter;
      }

      counter++;
      //   console.log(tmpArr, "<<<", counter);
      tmpArr = tmpArr.map((el) => (el != 0 ? el - 1 : el));

      // index 0 masih lebih besar dari 0 berarti looping whilenya lanjut
      if (tmpArr[0] > 0) {
        continue;
      }

      // cek index 1 kalau lebih dari atau sama dengan 0 maka keluar while ambil data baru
      if (tmpArr[1] >= 0) {
        break;
      }
      // kalau index 1 sudah 0 cek index 2 kalau lebih besar dari 0 maka ambil dara baru dari mulai index ini

      if (tmpArr[2] >= 0) {
        i += 1;
        break;
      }

      // kalau index 1 lebih besar dari 0 maka ambil data baru mulai dari index ini
    }
    arrCandle[i] = tmpArr[0];
    if (arrCandle[i + 1] != undefined) {
      arrCandle[i + 1] = tmpArr[1];
    }
    if (arrCandle[i + 2] != undefined) {
      arrCandle[i + 2] = tmpArr[2];
    }
  }

  return counter;
}

console.log(solution("1321"));
console.log(solution("0323456"));

/*
[
    1, 2, 3, *, 4, 5, 6, 7, 8, *, 
    9, 10, 11, *, 12, 13, 14, 15, 16, *, 
    17, 18, 19, *, 20, 21, 22, 23, 24, *, 
    ....
]

jadi kalau dimasukin ke array bintangnya bakal muncul di index 4, 10, 14, 20, 24.......

*/

function blowCandles(str) {
  let blow = 0,
    blow1 = 0,
    blow2 = 0;
  for (let candle of str) {
    console.log(candle, "<<<<<");
    let blow0 = Math.max(candle - blow1 - blow2, 0);
    blow += blow0;
    blow2 = blow1;
    blow1 = blow0;
  }
  return blow;
}

console.log(blowCandles("1321"));
// console.log(solution("0323456"));

// kyu 8
// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/solutions/javascript

// function basicOp(operation, value1, value2) {
//   switch (operation) {
//     case "+":
//       return value1 + value2;
//     case "-":
//       return value1 - value2;
//     case "*":
//       return value1 * value2;
//     case "/":
//       return value1 / value2;
//   }
// }

function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}

console.log(basicOp("+", 4, 5));
