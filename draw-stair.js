// kyu 8
// https://www.codewars.com/kata/5b4e779c578c6a898e0005c5

function drawStairs(n) {
  let stairs = "";
  for (let i = 0; i < n; i++) {
    if (n == 1) {
      stairs += "I";
    } else if (i == n - 1) {
      stairs += " ".repeat(i) + "I";
    } else {
      stairs += " ".repeat(i) + "I\n";
    }
  }
  return stairs;
}

console.log(drawStairs(1));
