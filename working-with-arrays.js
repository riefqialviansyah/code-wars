// kyu 7
// https://www.codewars.com/kata/5a4ff3c5fd56cbaf9800003e/train/javascript

function withoutLast(arr) {
  // Fix it
  arr.pop(); // removes the last element
  return arr;
}

// console.log(
//   withoutLast([17, 57, 76, 4, 41, 61, 80, 30, 40, 54, 27, 79, 5, "", 0])
// );

function withoutLast(arr) {
  // Fix it
  //   arr.pop(); // removes the last element

  return arr.filter((el, idx) => {
    if (idx != arr.length - 1) {
      return el;
    }
  });
}

console.log(withoutLast([17, 57, 76, 4, 41, 61, 80, 30, 40, 54, 27, 79, 5]));

// function generateRandomArray(length, max) {
//   let arr = [];
//   let randomLength = Math.floor(Math.random() * length + 5);
//   //   console.log(randomLength);
//   for (let i = 0; i < randomLength; i++) {
//     arr.push(Math.floor(Math.random() * max) + 1);
//   }
//   return arr;
// }

// console.log(generateRandomArray(10, 100));
