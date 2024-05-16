// kyu 6
// https://www.codewars.com/kata/57a42ef9e298a72d710002aa

function howManyStep(a, b) {
  let al = a;

  const rule = {
    one: (ac) => ac * 2,
    two: (ac) => ac + 1,
  };
  let counter = 0;

  // selama a lebih kecil atau sama dengan b
  function loop() {
    while (al < b) {
      al = rule.two(al);
      counter++;
    }
  }

  // pengecekan kalau a == b

  if (al != b) {
    al = a;
    counter = 0;
    loop();
  }
  return counter;
}

console.log(howManyStep(1, 10));
