// kyu8
// https://www.codewars.com/kata/64fc03a318692c1333ebc04c

function solution(str, one, two) {
  let result = true;

  str.split("").map((el, i) => {
    if (el == one && str[i + 1] != two) {
      result = false;
    }
  });

  return result;
}

console.log(solution("he headed to the store", "h", "e"));
