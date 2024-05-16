// kyu 7
// https://www.codewars.com/kata/5a3dd29055519e23ec000074/train/javascript

function checkExam(array1, array2) {
  // good luck
  let resut = array1.reduce((tot, el, idx) => {
    if (el == array2[idx]) {
      return (tot += 4);
    } else if (array2[idx] == "") {
      return (tot += 0);
    } else {
      return (tot -= 1);
    }
  }, 0);

  return resut > 0 ? resut : 0;
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]));
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"]));
