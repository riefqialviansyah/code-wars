const A = ["a", "a", "t", "e", "f", "i", "j"];
const B = ["t", "g", "g", "i", "k", "f"];

// difference = [a, e, g, j, k]

function solution(arr1, arr2) {
  let result = [];
  arr1.map((el) => {
    result.includes(el) || arr2.includes(el) ? null : result.push(el);
  });

  arr2.map((el) => {
    result.includes(el) || arr1.includes(el) ? null : result.push(el);
  });

  return result.sort();
}

console.log(solution(A, B));
