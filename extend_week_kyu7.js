const EXTENDED_MONTHS = [0, 2, 4, 6, 7, 9, 11];

function solve(a, b) {
  let range = [];
  for (; a <= b; a++) {
    range = range.concat(
      EXTENDED_MONTHS.map((m) => new Date(a, m, 1)).filter(
        (d) => d.getDay() === 5
      )
    );
  }
  console.log(range);
  return [
    range[0].toLocaleString("en-us", { month: "short" }),
    range[range.length - 1].toLocaleString("en-us", { month: "short" }),
    range.length,
  ];
}

console.log(solve(2016, 2020));
// console.log(new Date("2015-12-31T16:00:00.000Z").getDay());
